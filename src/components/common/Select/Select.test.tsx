import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Select } from './Select';

const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];

describe('Select Component', () => {
    test('renders without crashing', () => {
        const { getByText } = render(<Select options={options} onChange={() => {}} />);
        expect(getByText('Select an option')).toBeInTheDocument();
    });

    test('displays the placeholder when no value is selected', () => {
        const { getByText } = render(<Select options={options} onChange={() => {}} />);
        expect(getByText('Select an option')).toBeInTheDocument();
    });

    test('displays the selected value', () => {
        const { getByText } = render(<Select options={options} value="option1" onChange={() => {}} />);
        expect(getByText('Option 1')).toBeInTheDocument();
    });

    test('opens the dropdown when clicked', () => {
        const { getByText, getByRole } = render(<Select options={options} onChange={() => {}} />);
        fireEvent.click(getByRole('button'));
        expect(getByText('Option 1')).toBeInTheDocument();
        expect(getByText('Option 2')).toBeInTheDocument();
        expect(getByText('Option 3')).toBeInTheDocument();
    });

    test('calls onChange with the correct value when an option is selected', () => {
        const handleChange = jest.fn();
        const { getByText, getByRole } = render(<Select options={options} onChange={handleChange} />);
        fireEvent.click(getByRole('button'));
        fireEvent.click(getByText('Option 2'));
        expect(handleChange).toHaveBeenCalledWith('option2');
    });

    test('closes the dropdown when an option is selected', () => {
        const { getByText, getByRole, queryByText } = render(<Select options={options} onChange={() => {}} />);
        fireEvent.click(getByRole('button'));
        fireEvent.click(getByText('Option 2'));
        expect(queryByText('Option 1')).not.toBeInTheDocument();
        expect(queryByText('Option 2')).not.toBeInTheDocument();
        expect(queryByText('Option 3')).not.toBeInTheDocument();
    });

    test('displays error message when error prop is provided', () => {
        const { getByText } = render(<Select options={options} onChange={() => {}} error="This is an error" />);
        expect(getByText('This is an error')).toBeInTheDocument();
    });

    test('disables the select when disabled prop is true', () => {
        const { getByRole } = render(<Select options={options} onChange={() => {}} disabled />);
        expect(getByRole('button')).toHaveClass('cursor-not-allowed');
    });

    test('closes the dropdown when clicking outside', () => {
        const { getByText, getByRole, queryByText } = render(<Select options={options} onChange={() => {}} />);
        fireEvent.click(getByRole('button'));
        expect(getByText('Option 1')).toBeInTheDocument();
        fireEvent.mouseDown(document);
        expect(queryByText('Option 1')).not.toBeInTheDocument();
    });
});