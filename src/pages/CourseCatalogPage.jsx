// CourseCatalogPage - View all courses
import React, { useState } from 'react';
import Container from '../components/common/Container';
import SectionHeader from '../components/common/SectionHeader';
import CourseGrid from '../components/course/CourseGrid';
import { getAllCourses } from '../services/courseService';

const CourseCatalogPage = () => {
    const allCourses = getAllCourses();
    const [filter, setFilter] = useState('all');

    // Filter courses by level
    const filteredCourses = filter === 'all'
        ? allCourses
        : allCourses.filter(course => course.level === filter);

    const levels = ['all', 'Beginner', 'Intermediate', 'Advanced'];

    return (
        <div style={{ backgroundColor: 'var(--bg-main)', paddingTop: '60px', paddingBottom: '80px' }}>
            <Container>
                {/* Page Header */}
                <SectionHeader
                    title="All Courses"
                    subtitle={`Explore our complete catalog of ${allCourses.length} courses`}
                />

                {/* Filters */}
                <div className="flex justify-center gap-3 mt-12 mb-8">
                    {levels.map((level) => (
                        <button
                            key={level}
                            onClick={() => setFilter(level)}
                            className="px-6 py-2 rounded-lg font-medium transition-all"
                            style={{
                                backgroundColor: filter === level ? 'var(--brand-primary)' : 'white',
                                color: filter === level ? 'white' : 'var(--text-primary)',
                                border: '1px solid var(--border-light)'
                            }}
                        >
                            {level === 'all' ? 'All Levels' : level}
                        </button>
                    ))}
                </div>

                {/* Course Count */}
                <p className="text-center mb-8" style={{ color: 'var(--text-muted)' }}>
                    Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
                </p>

                {/* Course Grid */}
                <CourseGrid
                    courses={filteredCourses}
                    emptyMessage="No courses found for this level."
                />
            </Container>
        </div>
    );
};

export default CourseCatalogPage;
