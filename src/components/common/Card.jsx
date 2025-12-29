// Card Component  
// Base card component with consistent styling

import React from 'react';

const Card = ({ children, className = '', hover = false, ...props }) => {
    const baseStyles = 'bg-white rounded-2xl overflow-hidden';
    const shadowStyles = 'shadow-sm';
    const hoverStyles = hover ? 'transition-all duration-250 hover:shadow-lg hover:-translate-y-1' : '';

    return (
        <div
            className={`${baseStyles} ${shadowStyles} ${hoverStyles} ${className}`}
            style={{ border: '1px solid var(--border-light)' }}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
