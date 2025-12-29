// Button Component
// Reusable button with consistent styling and variants

import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    disabled = false,
    className = '',
    type = 'button',
    ...props
}) => {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-150';

    const variants = {
        primary: 'text-white hover:opacity-90',
        secondary: 'border-2 hover:opacity-80',
        ghost: 'hover:bg-opacity-10'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

    // Dynamic background color based on variant
    const getBgStyle = () => {
        if (variant === 'primary') {
            return { backgroundColor: 'var(--brand-primary)' };
        } else if (variant === 'secondary') {
            return {
                borderColor: 'var(--brand-primary)',
                color: 'var(--brand-primary)',
                backgroundColor: 'transparent'
            };
        }
        return {};
    };

    const handleClick = (e) => {
        if (!disabled && onClick) {
            onClick(e);
        }
    };

    return (
        <button
            type={type}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
            style={getBgStyle()}
            onClick={handleClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
