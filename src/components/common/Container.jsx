// Container Component
// Provides consistent max-width and padding across all pages

import React from 'react';

const Container = ({ children, className = '', maxWidth = '7xl' }) => {
    const maxWidthClasses = {
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl',
        '6xl': 'max-w-6xl',
        '7xl': 'max-w-7xl'
    };

    return (
        <div className={`${maxWidthClasses[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
};

export default Container;
