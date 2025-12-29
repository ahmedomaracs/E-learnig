// SectionHeader Component
// Consistent section headers across the application

import React from 'react';

const SectionHeader = ({ title, subtitle, align = 'center', className = '' }) => {
    const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

    return (
        <div className={`${alignmentClass} ${className}`} style={{ maxWidth: '700px' }}>
            <h2
                className="text-4xl font-bold mb-4"
                style={{ color: 'var(--text-primary)', lineHeight: '1.2' }}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className="text-lg"
                    style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
