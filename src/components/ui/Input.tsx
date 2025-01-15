'use client'

import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isLoading?: boolean;
  showCharCount?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className = '', 
    error, 
    label,
    startIcon,
    endIcon,
    isLoading,
    showCharCount,
    maxLength,
    ...props 
  }, ref) => {
    return (
      <div className="w-full space-y-1">
        {/* Label */}
        {label && (
          <label 
            htmlFor={props.id} 
            className="block text-sm font-medium text-gray-200"
          >
            {label}
          </label>
        )}
        
        {/* Input Container */}
        <div className="relative">
          {/* Start Icon */}
          {startIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {startIcon}
            </div>
          )}
          
          {/* Input */}
          <input
            className={`
              w-full
              bg-gray-800
              text-white
              border-2
              ${error ? 'border-red-500' : 'border-gray-700'}
              rounded-full
              px-4
              py-2
              transition-all
              duration-200
              focus:outline-none
              focus:ring-2
              focus:ring-red-600
              focus:border-transparent
              placeholder-gray-400
              disabled:opacity-50
              disabled:cursor-not-allowed
              hover:border-gray-600
              ${startIcon ? 'pl-10' : ''}
              ${(endIcon || isLoading) ? 'pr-10' : ''}
              ${className}
            `}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${props.id}-error` : undefined}
            ref={ref}
            {...props}
          />
          
          {/* End Icon or Loading Spinner */}
          {(endIcon || isLoading) && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-gray-600 border-t-red-600 rounded-full animate-spin" />
              ) : (
                endIcon
              )}
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <p 
            className="text-sm text-red-500" 
            id={`${props.id}-error`}
            role="alert"
          >
            {error}
          </p>
        )}
        
        {/* Character Count */}
        {showCharCount && maxLength && (
          <div className="text-xs text-gray-400 text-right">
            {props.value?.toString().length || 0}/{maxLength}
          </div>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
