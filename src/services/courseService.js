// Course Service Layer
// This abstracts data access and makes it easy to switch to API calls later

import { courses } from '../data/courses';

/**
 * Get all courses
 * @returns {Array} Array of course objects
 */
export const getAllCourses = () => {
    return courses;
};

/**
 * Get a single course by ID
 * @param {string} id - Course ID
 * @returns {Object|null} Course object or null if not found
 */
export const getCourseById = (id) => {
    const course = courses.find(c => c.id === id);
    return course || null;
};

/**
 * Get courses by level
 * @param {string} level - Course level (Beginner, Intermediate, Advanced)
 * @returns {Array} Filtered courses
 */
export const getCoursesByLevel = (level) => {
    return courses.filter(c => c.level === level);
};

/**
 * Get courses by instructor
 * @param {string} instructorName - Instructor name
 * @returns {Array} Filtered courses
 */
export const getCoursesByInstructor = (instructorName) => {
    return courses.filter(c => c.instructor === instructorName);
};

/**
 * Search courses by title or description
 * @param {string} query - Search query
 * @returns {Array} Matching courses
 */
export const searchCourses = (query) => {
    const lowerQuery = query.toLowerCase();
    return courses.filter(c =>
        c.title.toLowerCase().includes(lowerQuery) ||
        c.description.toLowerCase().includes(lowerQuery)
    );
};

/**
 * Get featured courses (top rated)
 * @param {number} limit - Number of courses to return
 * @returns {Array} Top rated courses
 */
export const getFeaturedCourses = (limit = 4) => {
    return courses
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit);
};

// Future: Replace with actual API calls
// export const getAllCourses = async () => {
//   const response = await fetch('/api/courses');
//   return response.json();
// };
