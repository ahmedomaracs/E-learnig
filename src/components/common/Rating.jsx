// Rating Component
// Displays star rating and review count

import React from 'react';

const Rating = ({ rating, reviewsCount, showReviews = true, size = 'sm' }) => {
    const sizes = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg'
    };

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className={`flex items-center gap-2 ${sizes[size]}`}>
            <div className="flex items-center">
                {/* Full Stars */}
                {[...Array(fullStars)].map((_, i) => (
                    <span key={`full-${i}`} style={{ color: 'var(--rating-gold)' }}>★</span>
                ))}

                {/* Half Star */}
                {hasHalfStar && (
                    <span style={{ color: 'var(--rating-gold)' }}>★</span>
                )}

                {/* Empty Stars */}
                {[...Array(emptyStars)].map((_, i) => (
                    <span key={`empty-${i}`} style={{ color: 'var(--border-color)' }}>★</span>
                ))}
            </div>

            {/* Rating Number */}
            <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                {rating.toFixed(1)}
            </span>

            {/* Review Count */}
            {showReviews && reviewsCount && (
                <span style={{ color: 'var(--text-muted)' }}>
                    ({reviewsCount.toLocaleString()})
                </span>
            )}
        </div>
    );
};

export default Rating;
