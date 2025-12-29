// AuthContext.jsx - Global authentication state management
import React, { createContext, useContext, useState, useEffect } from 'react';
import { saveUser, getUser, clearUser } from '../utils/authStorage';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Load user from localStorage on mount
    useEffect(() => {
        const storedUser = getUser();
        if (storedUser) {
            setUser(storedUser);
        }
        setLoading(false);
    }, []);

    /**
     * Login user
     * @param {Object} userData - User object from API
     */
    const login = (userData) => {
        setUser(userData);
        saveUser(userData);
    };

    /**
     * Signup user (also logs them in)
     * @param {Object} userData - User object from API
     */
    const signup = (userData) => {
        setUser(userData);
        saveUser(userData);
    };

    /**
     * Logout user
     */
    const logout = () => {
        setUser(null);
        clearUser();
    };

    /**
     * Check if user is authenticated
     */
    const isAuthenticated = !!user;

    /**
     * Check if user is a lecturer
     */
    const isLecturer = user?.role === 'lecturer';

    const value = {
        user,
        isAuthenticated,
        isLecturer,
        loading,
        login,
        signup,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

/**
 * Custom hook to use auth context
 * @returns {Object} Auth context value
 */
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

export default AuthContext;
