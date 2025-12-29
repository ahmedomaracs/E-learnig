// enrollmentService.js - Handles student enrollments and progress tracking
// Storage Key: 'enrollments'

const STORAGE_KEY = 'enrollments';

/**
 * Get all enrollments for a specific user
 * @param {string} userId 
 * @returns {Array} List of enrolled courses
 */
export const getEnrollments = (userId) => {
    if (!userId) return [];

    try {
        const allEnrollments = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        return allEnrollments[userId] || [];
    } catch (error) {
        console.error('Error getting enrollments:', error);
        return [];
    }
};

/**
 * Check if a user is enrolled in a specific course
 * @param {string} userId 
 * @param {number|string} courseId 
 * @returns {boolean}
 */
export const isEnrolled = (userId, courseId) => {
    const enrollments = getEnrollments(userId);
    return enrollments.some(e => e.courseId.toString() === courseId.toString());
};

/**
 * Enroll a user in a course
 * @param {string} userId 
 * @param {Object} course - Course object (title, thumbnail, etc for display)
 * @returns {boolean} Success status
 */
export const enrollUser = (userId, course) => {
    if (isEnrolled(userId, course.id)) return false;

    try {
        const allEnrollments = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        const userEnrollments = allEnrollments[userId] || [];

        const newEnrollment = {
            courseId: course.id,
            title: course.title,
            thumbnail: course.image, // Ensure this matches course object key
            instructor: course.instructor,
            totalLessons: course.totalLessons || 20, // Mock total if missing
            enrolledAt: new Date().toISOString(),
            progress: {
                completedLessons: [],
                lastLessonId: null,
                percentage: 0
            }
        };

        userEnrollments.push(newEnrollment);
        allEnrollments[userId] = userEnrollments;

        localStorage.setItem(STORAGE_KEY, JSON.stringify(allEnrollments));
        return true;
    } catch (error) {
        console.error('Error enrolling user:', error);
        return false;
    }
};

/**
 * Update progress for a course
 * @param {string} userId 
 * @param {number|string} courseId 
 * @param {string} lessonId 
 * @returns {Object|null} Updated enrollment object
 */
export const updateProgress = (userId, courseId, lessonId) => {
    try {
        const allEnrollments = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        const userEnrollments = allEnrollments[userId] || [];

        const enrollmentIndex = userEnrollments.findIndex(e => e.courseId.toString() === courseId.toString());

        if (enrollmentIndex === -1) return null;

        const enrollment = userEnrollments[enrollmentIndex];

        // Add lesson if not already completed
        if (!enrollment.progress.completedLessons.includes(lessonId)) {
            enrollment.progress.completedLessons.push(lessonId);
        }

        enrollment.progress.lastLessonId = lessonId;

        // Calculate new percentage
        const percentage = Math.round(
            (enrollment.progress.completedLessons.length / enrollment.totalLessons) * 100
        );
        enrollment.progress.percentage = Math.min(percentage, 100);

        // Save back
        userEnrollments[enrollmentIndex] = enrollment;
        allEnrollments[userId] = userEnrollments;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(allEnrollments));

        return enrollment;
    } catch (error) {
        console.error('Error updating progress:', error);
        return null;
    }
};

/**
 * Get specific enrollment enrollment
 */
export const getEnrollment = (userId, courseId) => {
    const enrollments = getEnrollments(userId);
    return enrollments.find(e => e.courseId.toString() === courseId.toString());
};
