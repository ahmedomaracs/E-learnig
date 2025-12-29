// learningService.js - Handles learning progress and logic
import { updateProgress as updateEnrollmentProgress, getEnrollment } from '../../services/enrollmentService';
import { getCourseById } from '../../services/courseService';

/**
 * Get full learning state for a course (course content + user progress)
 */
export const getCourseLearningState = (userId, courseId) => {
    const course = getCourseById(courseId);
    const enrollment = getEnrollment(userId, courseId);

    if (!course || !enrollment) return null;

    return {
        course,
        progress: enrollment.progress,
        lastLessonId: enrollment.progress.lastLessonId
    };
};

/**
 * Mark lesson as complete and calculate progress
 */
export const markLessonComplete = (userId, courseId, lessonId) => {
    return updateEnrollmentProgress(userId, courseId, lessonId);
};

/**
 * Find the next lesson ID given the current lesson ID and course structure
 */
export const getNextLessonId = (course, currentLessonId) => {
    let allLessons = [];

    // Flatten all lessons
    course.sections.forEach(section => {
        // Handle both 'items' and 'lectures' structure for compatibility
        const items = section.items || section.lectures || [];
        // Generate IDs if missing (matching CoursePlayerPage logic)
        items.forEach((item, idx) => {
            const id = item.id || `l-${course.sections.indexOf(section)}-${idx}`;
            allLessons.push(id);
        });
    });

    const currentIndex = allLessons.indexOf(currentLessonId);
    if (currentIndex !== -1 && currentIndex < allLessons.length - 1) {
        return allLessons[currentIndex + 1];
    }

    return null;
};
