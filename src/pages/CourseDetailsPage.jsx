// CourseDetailsPage - Full course information page
import React from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import Container from '../components/common/Container';
import Rating from '../components/common/Rating';
import Accordion from '../components/course/Accordion';
import CourseSidebar from '../components/course/CourseSidebar';
import { getCourseById } from '../services/courseService';
import { useAuth } from '../auth/context/AuthContext';
import { enrollUser, isEnrolled } from '../services/enrollmentService';

const CourseDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, isAuthenticated } = useAuth();
    const course = getCourseById(id);

    // If course not found, redirect to 404
    if (!course) {
        return <Navigate to="/404" replace />;
    }

    const { title, description, instructor, rating, reviewsCount, studentsCount, level, techStack, sections } = course;

    // Check enrollment status
    const enrolled = isAuthenticated && user ? isEnrolled(user.id, course.id) : false;

    const handleEnrollment = () => {
        if (!isAuthenticated) {
            // Redirect to login with return url
            navigate('/login', { state: { from: `/course/${id}` } });
            return;
        }

        if (enrolled) {
            // Already enrolled - go to learning page
            navigate(`/course/${id}/learn`);
        } else {
            // New enrollment
            const success = enrollUser(user.id, course);
            if (success) {
                // Could show toast here
                navigate('/my-courses');
            }
        }
    };

    return (
        <div style={{ backgroundColor: 'var(--bg-main)', paddingTop: '40px', paddingBottom: '80px' }}>
            <Container>
                {/* Breadcrumbs */}
                <nav className="mb-6" aria-label="Breadcrumb">
                    <ol className="flex items-center gap-2 text-sm">
                        <li>
                            <Link
                                to="/"
                                className="hover:underline"
                                style={{ color: 'var(--brand-primary)' }}
                            >
                                Home
                            </Link>
                        </li>
                        <li style={{ color: 'var(--text-muted)' }}>/</li>
                        <li style={{ color: 'var(--text-secondary)' }}>
                            {title}
                        </li>
                    </ol>
                </nav>

                {/* Two-column layout: Content (70%) + Sidebar (30%) */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content - 2/3 width */}
                    <div className="lg:col-span-2">
                        {/* Course Header */}
                        <div className="mb-8">
                            <h1
                                className="text-4xl font-bold mb-4"
                                style={{ color: 'var(--text-primary)', lineHeight: '1.2' }}
                            >
                                {title}
                            </h1>

                            <p
                                className="text-lg mb-6"
                                style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}
                            >
                                {description}
                            </p>

                            {/* Meta Information */}
                            <div className="flex flex-wrap items-center gap-4 mb-4">
                                <Rating rating={rating} reviewsCount={reviewsCount} size="md" />
                                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                                    {studentsCount.toLocaleString()} students
                                </span>
                                <span
                                    className="px-3 py-1 rounded text-sm font-medium"
                                    style={{
                                        backgroundColor: 'var(--bg-secondary)',
                                        color: 'var(--text-primary)'
                                    }}
                                >
                                    {level}
                                </span>
                            </div>

                            {/* Instructor */}
                            <div className="flex items-center gap-2">
                                <span style={{ color: 'var(--text-muted)' }}>Created by</span>
                                <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                                    {instructor}
                                </span>
                            </div>
                        </div>

                        {/* Tech Stack */}
                        {techStack && techStack.length > 0 && (
                            <div className="mb-8 p-6 bg-white rounded-xl" style={{ border: '1px solid var(--border-light)' }}>
                                <h3 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                                    Technologies you'll learn:
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {techStack.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 rounded-lg text-sm font-medium"
                                            style={{
                                                backgroundColor: 'var(--bg-secondary)',
                                                color: 'var(--text-primary)'
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Course Curriculum */}
                        <div className="mb-8">
                            <h2
                                className="text-2xl font-bold mb-6"
                                style={{ color: 'var(--text-primary)' }}
                            >
                                Course Curriculum
                            </h2>
                            <Accordion sections={sections} />
                        </div>

                        {/* Course Description (Full) */}
                        <div className="p-6 bg-white rounded-xl" style={{ border: '1px solid var(--border-light)' }}>
                            <h2
                                className="text-2xl font-bold mb-4"
                                style={{ color: 'var(--text-primary)' }}
                            >
                                About This Course
                            </h2>
                            <p
                                className="leading-relaxed"
                                style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}
                            >
                                {description}
                            </p>
                        </div>
                    </div>

                    {/* Sidebar - 1/3 width */}
                    <div>
                        <CourseSidebar
                            course={course}
                            isEnrolled={enrolled}
                            onEnroll={handleEnrollment}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CourseDetailsPage;
