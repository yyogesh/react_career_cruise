import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from './Input';

describe('Input Component', () => {
    test('renders without crashing', () => {
        render(<Input />);
    });

    test('renders label when provided', () => {
        render(<Input label="Test Label" />);
        expect(screen.getByText('Test Label')).toBeInTheDocument();
    });

    test('renders error message when provided', () => {
        render(<Input error="Test Error" />);
        expect(screen.getByText('Test Error')).toBeInTheDocument();
    });

    test('applies error styles when error is provided', () => {
        render(<Input error="Test Error" />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toHaveClass('border-red-500');
    });

    test('applies disabled styles when disabled', () => {
        render(<Input disabled />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toHaveClass('bg-gray-100');
        expect(inputElement).toHaveAttribute('disabled');
    });

    test('calls onChange handler when input value changes', () => {
        const handleChange = jest.fn();
        render(<Input onChange={handleChange} />);
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: 'test' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});