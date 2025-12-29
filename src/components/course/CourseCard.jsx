// CourseCard Component
// Reusable course card for displaying course preview

import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import Rating from '../common/Rating';

const CourseCard = ({ course }) => {
    const { id, title, instructor, rating, reviewsCount, price, originalPrice, duration, level, thumbnail } = course;

    const isFree = price === 0;

    return (
        <Link to={`/course/${id}`} className="block">
            <Card hover>
                {/* Thumbnail */}
                <div
                    className="bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center"
                    style={{ height: '180px', borderRadius: '16px 16px 0 0' }}
                >
                    <div className="text-4xl font-bold" style={{ color: 'var(--brand-primary)' }}>
                        Course
                    </div>
                </div>

                {/* Content */}
                <div style={{ padding: '20px' }}>
                    {/* Title */}
                    <h3
                        className="font-semibold leading-tight mb-2"
                        style={{
                            color: 'var(--text-primary)',
                            fontSize: '17px',
                            minHeight: '40px',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}
                    >
                        {title}
                    </h3>

                    {/* Instructor */}
                    <p
                        className="mb-3"
                        style={{ color: 'var(--text-muted)', fontSize: '13px' }}
                    >
                        {instructor}
                    </p>

                    {/* Rating */}
                    <div className="mb-3">
                        <Rating rating={rating} reviewsCount={reviewsCount} size="sm" />
                    </div>

                    {/* Meta Info */}
                    <div
                        className="flex justify-between items-center text-xs mb-4"
                        style={{ color: 'var(--text-muted)' }}
                    >
                        <span>{duration}</span>
                        <span
                            className="px-2 py-1 rounded"
                            style={{ backgroundColor: 'var(--bg-secondary)' }}
                        >
                            {level}
                        </span>
                    </div>

                    {/* Price */}
                    <div className="flex justify-between items-center">
                        <div>
                            {isFree ? (
                                <span
                                    className="font-bold text-lg"
                                    style={{ color: 'var(--brand-primary)' }}
                                >
                                    Free
                                </span>
                            ) : (
                                <>
                                    <span
                                        className="font-bold text-lg mr-2"
                                        style={{ color: 'var(--brand-primary)' }}
                                    >
                                        ${price}
                                    </span>
                                    {originalPrice && (
                                        <span
                                            className="text-sm line-through"
                                            style={{ color: 'var(--text-muted)' }}
                                        >
                                            ${originalPrice}
                                        </span>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </Card>
        </Link>
    );
};

export default CourseCard;
