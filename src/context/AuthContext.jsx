import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../api/axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for stored token on mount
        const token = localStorage.getItem('authToken');
        if (token) {
            // Ideally, verify token with backend here
            // api.get('/auth/me').then(res => setUser(res.data)).catch(...)
            setUser({ name: 'Demo User', email: 'demo@example.com' }); // Mock user for now
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        // Replace with actual API call
        // const response = await api.post('/auth/login', { email, password });
        // const { token, user } = response.data;

        // Mock login
        const token = 'mock-jwt-token';
        const mockUser = { name: 'John Doe', email };

        localStorage.setItem('authToken', token);
        setUser(mockUser);
        return mockUser;
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
