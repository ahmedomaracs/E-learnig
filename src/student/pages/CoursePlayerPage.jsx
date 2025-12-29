// CoursePlayerPage.jsx - Main learning interface
import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/context/AuthContext';
import { getCourseLearningState, markLessonComplete, getNextLessonId } from '../services/learningService';

// Components
import VideoPlayer from '../components/VideoPlayer';
import CurriculumSidebar from '../components/CurriculumSidebar';
import LessonHeader from '../components/LessonHeader';
import LessonActions from '../components/LessonActions';

const CoursePlayerPage = () => {
    const { id: courseId } = useParams();
    const navigate = useNavigate();
    const { user, isAuthenticated } = useAuth();

    // State
    const [loading, setLoading] = useState(true);
    const [course, setCourse] = useState(null);
    const [progress, setProgress] = useState(null);
    const [currentLessonId, setCurrentLessonId] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // 1. Load Data & Authorization
    useEffect(() => {
        if (!isAuthenticated) return;

        // Load full learning state
        const learningState = getCourseLearningState(user.id, courseId);

        if (!learningState) {
            // Not enrolled or invalid course -> Redirect
            navigate(`/course/${courseId}`);
            return;
        }

        setCourse(learningState.course);
        setProgress(learningState.progress);

        // Resume logic: Use last watched or default to first
        const initialLessonId = learningState.lastLessonId || 'l-0-0'; // Fallback ID
        setCurrentLessonId(initialLessonId);

        setLoading(false);
    }, [courseId, user.id, isAuthenticated, navigate]);

    // 2. transform course data for UI (Memoized)
    const sidebarSections = useMemo(() => {
        if (!course) return [];
        return course.sections.map((section, sIdx) => ({
            title: section.title,
            lessons: (section.items || section.lectures || []).map((item, lIdx) => ({
                id: item.id || `l-${sIdx}-${lIdx}`, // Ensure consistent ID generation
                title: item.title,
                duration: item.duration,
                videoUrl: '' // Mock
            }))
        }));
    }, [course]);

    // Find current lesson object
    const currentLesson = useMemo(() => {
        if (!sidebarSections.length) return null;
        for (const section of sidebarSections) {
            const found = section.lessons.find(l => l.id === currentLessonId);
            if (found) return found;
        }
        // Fallback if ID mismatch
        return sidebarSections[0].lessons[0];
    }, [sidebarSections, currentLessonId]);

    // Next Lesson Logic
    const handleLessonComplete = () => {
        // 1. Mark complete
        const updatedEnrollment = markLessonComplete(user.id, courseId, currentLessonId);
        if (updatedEnrollment) {
            setProgress(updatedEnrollment.progress);
        }

        // 2. Auto-advance (Optional UX choice, usually good for video courses)
        const nextId = getNextLessonId(course, currentLessonId);
        if (nextId) {
            setCurrentLessonId(nextId);
        }
    };

    const handleLessonSelect = (lesson) => {
        setCurrentLessonId(lesson.id);
        // On mobile, close sidebar
        if (window.innerWidth < 1024) setSidebarOpen(false);
        // Mark as accessed (update lastLessonId only) - could be added to service
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading Course...</div>;
    if (!course || !currentLesson) return <div className="min-h-screen flex items-center justify-center">Course Content Unavailable</div>;

    const completedLessons = progress?.completedLessons || [];
    const nextLessonId = getNextLessonId(course, currentLessonId);

    return (
        <div className="flex h-screen flex-col bg-white overflow-hidden">
            {/* Header (Minimal) */}
            <header className="bg-gray-900 text-white h-14 flex items-center justify-between px-4 shrink-0 z-20 shadow-md">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate('/my-courses')} className="hover:bg-gray-800 p-2 rounded transition">
                        ← Back to Dashboard
                    </button>
                    <span className="font-semibold truncate hidden sm:block">{course.title}</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-300">
                        Progress: {progress?.percentage || 0}%
                    </div>
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        {sidebarOpen ? '✕' : '☰'}
                    </button>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden relative">
                {/* Main Content (Video + Text) */}
                <main className="flex-1 overflow-y-auto bg-gray-50 w-full">
                    <div className="max-w-4xl mx-auto p-4 md:p-8">
                        <VideoPlayer
                            videoUrl={currentLesson.videoUrl}
                            title={currentLesson.title}
                            onEnded={handleLessonComplete}
                            autoPlay={true}
                        />

                        <div className="mt-8">
                            <LessonHeader
                                title={currentLesson.title}
                                courseTitle={course.title}
                                hasNext={!!nextLessonId}
                                onNext={() => nextLessonId && setCurrentLessonId(nextLessonId)}
                            />

                            <div className="prose max-w-none text-gray-700 mb-8">
                                <p>Here is the content for <strong>{currentLesson.title}</strong>.</p>
                                <p>In this lesson, you will learn the fundamental concepts required to master this topic. Please watch the video carefully and complete the exercises below.</p>
                            </div>

                            <LessonActions
                                isCompleted={completedLessons.includes(currentLessonId)}
                                onToggleComplete={() => markLessonComplete(user.id, courseId, currentLessonId)}
                                onNext={() => nextLessonId && setCurrentLessonId(nextLessonId)}
                                hasNext={!!nextLessonId}
                            />
                        </div>
                    </div>
                </main>

                {/* Sidebar (Responsive) */}
                <aside
                    className={`
                    fixed lg:relative z-10 w-80 h-full bg-white border-l border-gray-200 shadow-xl lg:shadow-none transition-transform duration-300 ease-in-out
                    ${sidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
                    right-0 top-0 pt-14 lg:pt-0
                 `}
                >
                    <CurriculumSidebar
                        sections={sidebarSections}
                        currentLessonId={currentLessonId}
                        completedLessons={completedLessons}
                        onSelectLesson={handleLessonSelect}
                    />
                </aside>

                {/* Overlay for mobile sidebar */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-0 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}
            </div>
        </div>
    );
};

export default CoursePlayerPage;
