// authStorage.js - localStorage utilities for auth
// Handles all localStorage operations for authentication

/**
 * Save user data to localStorage
 * @param {Object} user - User object
 */
export const saveUser = (user) => {
    try {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isAuthenticated', 'true');
    } catch (error) {
        console.error('Error saving user to localStorage:', error);
    }
};

/**
 * Get user data from localStorage
 * @returns {Object|null} User object or null
 */
export const getUser = () => {
    try {
        const userJson = localStorage.getItem('user');
        return userJson ? JSON.parse(userJson) : null;
    } catch (error) {
        console.error('Error getting user from localStorage:', error);
        return null;
    }
};

/**
 * Remove user data from localStorage
 */
export const clearUser = () => {
    try {
        localStorage.removeItem('user');
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userEmail');
    } catch (error) {
        console.error('Error clearing user from localStorage:', error);
    }
};

/**
 * Check if user is authenticated
 * @returns {boolean}
 */
export const isAuthenticated = () => {
    return localStorage.getItem('isAuthenticated') === 'true' && getUser() !== null;
};
