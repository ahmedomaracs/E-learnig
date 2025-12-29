// MyCoursesPage.jsx - Student dashboard for enrolled courses
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/context/AuthContext';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import CourseProgressCard from '../components/CourseProgressCard';
import { getEnrollments } from '../../services/enrollmentService';

const MyCoursesPage = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.id) {
            const courses = getEnrollments(user.id);
            setEnrolledCourses(courses);
        }
        setLoading(false);
    }, [user]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen pb-16" style={{ backgroundColor: 'var(--bg-main)' }}>
            {/* Header Section */}
            <div className="bg-white border-b border-gray-200 mb-8 pt-8 pb-8">
                <Container>
                    <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                        My Learning
                    </h1>
                    <div className="flex gap-6 mt-6">
                        <button
                            className="pb-2 border-b-2 font-medium text-sm"
                            style={{
                                borderColor: 'var(--brand-primary)',
                                color: 'var(--brand-primary)'
                            }}
                        >
                            All Courses ({enrolledCourses.length})
                        </button>
                        <button
                            className="pb-2 text-sm font-medium hover:text-gray-900 transition"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            In Progress
                        </button>
                        <button
                            className="pb-2 text-sm font-medium hover:text-gray-900 transition"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            Completed
                        </button>
                        <button
                            className="pb-2 text-sm font-medium hover:text-gray-900 transition"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            Wishlist
                        </button>
                    </div>
                </Container>
            </div>

            <Container>
                {enrolledCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {enrolledCourses.map(course => (
                            <CourseProgressCard
                                key={course.courseId}
                                course={{
                                    id: course.courseId,
                                    title: course.title,
                                    thumbnail: course.thumbnail,
                                    instructor: course.instructor,
                                    progress: course.progress.percentage,
                                    completedLessons: course.progress.completedLessons.length,
                                    totalLessons: course.totalLessons,
                                    lastAccessed: 'Recently'
                                }}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-white rounded-xl border border-dashed border-gray-300">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                            🎓
                        </div>
                        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                            You haven't enrolled in any courses yet
                        </h3>
                        <p className="text-gray-500 mb-6 max-w-md mx-auto">
                            Explore our catalog and start learning new skills today.
                        </p>
                        <Button
                            variant="primary"
                            onClick={() => navigate('/catalog')}
                        >
                            Browse Courses
                        </Button>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default MyCoursesPage;
