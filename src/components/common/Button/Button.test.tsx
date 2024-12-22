import Button from "./Button";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

describe("Button Component", () => {
    it("renders button with children", () => {
        render(<Button>Button</Button>);
        expect(screen.getByText("Button")).toBeInTheDocument();
    });

    it("should render loader", () => {
        render(<Button loading>Button</Button>);
        expect(screen.queryByText("Button")).not.toBeInTheDocument();
    });

    it("should render with full width class", () => {
        render(<Button fullWidth>Button</Button>);
        expect(screen.getByText("Button")).toHaveClass("w-full");
    });
});