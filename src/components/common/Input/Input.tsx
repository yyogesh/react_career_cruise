interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    className?: string;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    className = '',
    ...props
}) => {
    const id = props.id || props.name;
    return (
        <div className="flex flex-col gap-2 w-full">
            {label && (
                <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                id={id}
                className={`
                    w-full 
                    px-3 
                    py-2 
                    text-base 
                    text-gray-700 
                    bg-white 
                    border 
                    rounded 
                    transition-all 
                    duration-200 
                    ease-in-out
                    ${error
                        ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'}
                    ${props.disabled
                        ? 'bg-gray-100 cursor-not-allowed'
                        : 'hover:border-blue-500'}
                    ${className}
                  `}
                {...props}
            />
            {error && (
                <span
                    className="
            text-xs 
            text-red-500 
            -mt-1
          "
                >
                    {error}
                </span>
            )}
        </div>
    )
}

export default Input;