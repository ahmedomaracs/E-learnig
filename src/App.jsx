// App.jsx - Main application with auth integration
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './auth/context/AuthContext';
import ProtectedRoute from './auth/components/ProtectedRoute';
import LoginPage from './auth/pages/LoginPage';
import SignupPage from './auth/pages/SignupPage';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import CourseCatalogPage from './pages/CourseCatalogPage';
import MyCoursesPage from './student/pages/MyCoursesPage';
import CoursePlayerPage from './student/pages/CoursePlayerPage';
import NotFoundPage from './pages/NotFoundPage';
import LecturerRoute from './auth/components/LecturerRoute';
import LecturerDashboard from './lecturer/pages/LecturerDashboard';
import LecturerCourses from './lecturer/pages/LecturerCourses';
import CreateCourse from './lecturer/pages/CreateCourse';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />

                    {/* Routes with Layout */}
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="catalog" element={<CourseCatalogPage />} />
                        <Route path="courses" element={<Navigate to="/catalog" replace />} />

                        {/* Protected Routes */}
                        <Route
                            path="course/:id"
                            element={
                                <ProtectedRoute>
                                    <CourseDetailsPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="my-courses"
                            element={
                                <ProtectedRoute>
                                    <MyCoursesPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="course/:id/learn"
                            element={
                                <ProtectedRoute>
                                    <CoursePlayerPage />
                                </ProtectedRoute>
                            }
                        />

                        {/* Lecturer Routes */}
                        <Route
                            path="lecturer"
                            element={
                                <LecturerRoute>
                                    <React.Fragment>
                                        {/* Optional: Add a Lecturer Layout here later */}
                                        <Outlet />
                                    </React.Fragment>
                                </LecturerRoute>
                            }
                        >
                            <Route path="dashboard" element={<LecturerDashboard />} />
                            <Route path="courses" element={<LecturerCourses />} />
                            <Route path="create-course" element={<CreateCourse />} />
                            <Route index element={<Navigate to="dashboard" replace />} />
                        </Route>

                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;