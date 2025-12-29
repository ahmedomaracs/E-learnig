// authService.js - Authentication API service layer
// Mock implementation - ready to replace with real API calls

/**
 * Simulate API delay
 */
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Mock user database (in-memory for demo)
 */
const mockUsers = [
    {
        id: 'u1',
        name: 'Ahmed Omara',
        email: 'ahmed@email.com',
        password: 'password123', // In production, never store plain passwords!
        role: 'student',
        enrolledCourses: [
            {
                id: 1,
                title: 'Complete Web Development Bootcamp',
                instructor: 'Dr. Angela Yu',
                thumbnail: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                progress: 35, // Percentage completed
                totalLessons: 120,
                completedLessons: 42,
                lastAccessed: '2 days ago'
            },
            {
                id: 2,
                title: 'React Masterclass',
                instructor: 'Maximilian Schwarzmüller',
                thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                progress: 10,
                totalLessons: 85,
                completedLessons: 8,
                lastAccessed: '5 hours ago'
            }
        ]
    },
    {
        id: 'u2',
        name: 'Dr. Sarah Smith',
        email: 'sarah@email.com',
        password: 'password123',
        role: 'lecturer',
        enrolledCourses: []
    }
];

/**
 * Login user
 * @param {Object} credentials - { email, password }
 * @returns {Promise<Object>} User object without password
 */
export const login = async (credentials) => {
    await delay(800); // Simulate network delay

    const { email, password } = credentials;

    // Find user
    const user = mockUsers.find(u => u.email === email);

    if (!user) {
        throw new Error('Invalid email or password');
    }

    if (user.password !== password) {
        throw new Error('Invalid email or password');
    }

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    return {
        ...userWithoutPassword,
        token: `mock_token_${user.id}_${Date.now()}`
    };
};

/**
 * Register new user
 * @param {Object} userData - { name, email, password, role }
 * @returns {Promise<Object>} User object without password
 */
export const signup = async (userData) => {
    await delay(800); // Simulate network delay

    const { name, email, password, role = 'student' } = userData;

    // Check if email already exists
    const existingUser = mockUsers.find(u => u.email === email);
    if (existingUser) {
        throw new Error('Email already exists');
    }

    // Create new user
    const newUser = {
        id: `u${mockUsers.length + 1}`,
        name,
        email,
        password, // In production, this would be hashed on backend
        role, // 'student' or 'lecturer'
        enrolledCourses: []
    };

    mockUsers.push(newUser);

    // Return user without password
    const { password: _, ...userWithoutPassword } = newUser;
    return {
        ...userWithoutPassword,
        token: `mock_token_${newUser.id}_${Date.now()}`
    };
};

/**
 * Verify token (future implementation)
 * @param {string} token
 * @returns {Promise<boolean>}
 */
export const verifyToken = async (token) => {
    await delay(300);
    return token && token.startsWith('mock_token_');
};
