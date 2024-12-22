import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  label,
  error,
  disabled = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Find selected option
  const selectedOption = options.find(option => option.value === value);

  return (
    <div className={`relative w-full ${className}`} ref={selectRef}>
      {label && (
        <label 
          className="block text-sm font-medium text-gray-700 mb-1"
          htmlFor={label.toLowerCase().replace(/\s+/g, '-')}
        >
          {label}
        </label>
      )}

      <div
        className={`
          relative 
          w-full 
          ${disabled
            ? 'bg-gray-100 cursor-not-allowed'
            : 'bg-white cursor-pointer hover:border-blue-500'
          }
          border 
          rounded 
          py-2 
          px-3 
          text-sm 
          flex 
          items-center 
          justify-between
          ${error
            ? 'border-red-500 focus:ring-2 focus:ring-red-200'
            : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'}
        `}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span
          className={
            selectedOption
              ? 'text-gray-900'
              : 'text-gray-500'
          }
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`
            w-4 
            h-4 
            ml-2 
            transition-transform 
            ${isOpen ? 'rotate-180' : ''}
            ${disabled ? 'text-gray-400' : 'text-gray-600'}
          `}
        />
      </div>

      {error && (
        <div className="flex items-center mt-1">
          <p className="text-xs text-red-500 mr-2">
            {error}
          </p>
        </div>
      )}

      {isOpen && !disabled && (
        <div
          className="
            absolute 
            z-10 
            mt-1 
            w-full 
            bg-white 
            border 
            border-gray-300 
            rounded 
            shadow-lg 
            max-h-60 
            overflow-auto
          "
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={`
                px-3 
                py-2 
                text-sm 
                cursor-pointer 
                flex 
                items-center 
                justify-between
                ${value === option.value
                  ? 'bg-blue-50 text-blue-600'
                  : 'hover:bg-gray-100 text-gray-900'}
              `}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
              {value === option.value && (
                <Check className="w-4 h-4 text-blue-600" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;