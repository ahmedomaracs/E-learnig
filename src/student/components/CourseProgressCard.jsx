// EnrolledCourseCard.jsx - Card component for displaying enrolled courses with progress
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const CourseProgressCard = ({ course }) => {
    const navigate = useNavigate();

    return (
        <Card hover className="h-full flex flex-col">
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-xs font-medium opacity-90">{course.instructor}</p>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-lg font-bold mb-2 line-clamp-2" style={{ color: 'var(--text-primary)' }}>
                    {course.title}
                </h3>

                {/* Progress Section */}
                <div className="mt-auto pt-4">
                    <div className="flex justify-between text-xs mb-2 font-medium">
                        <span style={{ color: 'var(--text-secondary)' }}>{course.progress}% Complete</span>
                        <span style={{ color: 'var(--text-muted)' }}>{course.completedLessons}/{course.totalLessons} Lessons</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
                        <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                                width: `${course.progress}%`,
                                backgroundColor: 'var(--brand-primary)'
                            }}
                        ></div>
                    </div>

                    <Button
                        variant={course.progress > 0 ? "primary" : "secondary"}
                        className="w-full"
                        onClick={() => navigate(`/course/${course.id}/learn`)}
                    >
                        {course.progress === 0 ? 'Start Learning' : 'Continue Learning'}
                    </Button>

                    <p className="text-xs text-center mt-3" style={{ color: 'var(--text-muted)' }}>
                        Last accessed: {course.lastAccessed}
                    </p>
                </div>
            </div>
        </Card>
    );
};

export default CourseProgressCard;
