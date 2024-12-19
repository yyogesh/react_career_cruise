import React from "react";

interface ButtonPros extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'text';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    loading?: boolean;
    className?: string;
}

const Button: React.FC<ButtonPros> = ({
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    loading = false,
    className = '',
    children,
    disabled,
    ...props
}) => {
    // Variant styles
    const variantStyles = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50',
        text: 'text-blue-500 hover:bg-blue-50 bg-transparent'
    };
    // Size styles
    const sizeStyles = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg'
    };

    // Combine styles
    const buttonClasses = [
        'rounded',
        'transition-all',
        'duration-300',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-blue-300',
        'disabled:opacity-50',
        'disabled:cursor-not-allowed',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? 'w-full' : '',
        loading ? 'cursor-wait' : '',
        className
    ].filter(Boolean).join(' ');

    return <button className={buttonClasses} disabled={disabled || loading} {...props}>
        {
            loading ? (<span
                className="inline-block animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                aria-hidden="true"
            />) : children
        }
    </button>
}
export default Button;