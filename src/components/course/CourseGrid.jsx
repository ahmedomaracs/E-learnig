// CourseGrid Component
// Grid layout for displaying multiple course cards

import React from 'react';
import CourseCard from './CourseCard';

const CourseGrid = ({ courses, emptyMessage = 'No courses found.' }) => {
    if (courses.length === 0) {
        return (
            <div className="text-center py-16">
                <p className="text-xl" style={{ color: 'var(--text-muted)' }}>
                    {emptyMessage}
                </p>
            </div>
        );
    }

    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            style={{ gap: '32px' }}
        >
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
};

export default CourseGrid;
