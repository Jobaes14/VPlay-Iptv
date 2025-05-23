import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string | null;
  inputClassName?: string;
  labelClassName?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  id,
  type = 'text',
  error,
  className = '',
  inputClassName = '',
  labelClassName = '',
  ...props
}) => {
  return (
    <div className={`w-full ${className}`}>
      <label htmlFor={id} className={`block text-sm font-medium text-gray-300 mb-1 text-left ${labelClassName}`}>
        {label} {props.required && <span className="text-red-400">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className={`w-full bg-gray-800 text-gray-200 placeholder-gray-500 px-4 py-2.5 rounded-md 
                   border ${error ? 'border-red-500' : 'border-gray-700'} 
                   focus:ring-2 ${error ? 'focus:ring-red-500' : 'focus:ring-red-600'} 
                   focus:border-transparent outline-none transition-colors duration-150 ${inputClassName}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-400 text-left">{error}</p>}
    </div>
  );
};