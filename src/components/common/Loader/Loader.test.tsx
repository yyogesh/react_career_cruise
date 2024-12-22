import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Loader } from './Loader';

describe('Loader Component', () => {
    test('renders with default props', () => {
        const { container } = render(<Loader />);
        const loader = container.querySelector('div[role="status"]');
        expect(loader).toBeInTheDocument();
        expect(loader).toHaveClass('w-6 h-6');
    });

    test('renders with small size', () => {
        const { container } = render(<Loader size="small" />);
        const loader = container.querySelector('div[role="status"]');
        expect(loader).toBeInTheDocument();
        expect(loader).toHaveClass('w-4 h-4');
    });

    test('renders with large size', () => {
        const { container } = render(<Loader size="large" />);
        const loader = container.querySelector('div[role="status"]');
        expect(loader).toBeInTheDocument();
        expect(loader).toHaveClass('w-8 h-8');
    });

    test('renders with custom className', () => {
        const { container } = render(<Loader className="custom-class" />);
        const loaderContainer = container.firstChild;
        expect(loaderContainer).toHaveClass('custom-class');
    });

    test('renders in full screen mode', () => {
        const { container } = render(<Loader fullScreen />);
        const loaderContainer = container.firstChild;
        expect(loaderContainer).toHaveClass('fixed top-0 left-0 right-0 bottom-0 bg-white bg-opacity-80 z-[9999]');
    });
});