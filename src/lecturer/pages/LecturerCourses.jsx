// LecturerCourses.jsx - List of courses managed by the lecturer
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import SectionHeader from '../../components/common/SectionHeader';

const LecturerCourses = () => {
    const navigate = useNavigate();
    // Mock data
    const [courses] = useState([
        { id: 1, title: 'Complete Web Development Bootcamp', students: 120, rating: 4.9, status: 'published', price: '$99', revenue: '$10,200' },
        { id: 2, title: 'React Masterclass', students: 85, rating: 4.8, status: 'published', price: '$89', revenue: '$6,500' },
        { id: 3, title: 'Advanced CSS Patterns', students: 0, rating: 0, status: 'draft', price: '$49', revenue: '$0' },
    ]);

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <Container>
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
                    <Button variant="primary" onClick={() => navigate('/lecturer/create-course')}>
                        + Create New Course
                    </Button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-gray-700">Course</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Students</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Status</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Price</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Revenue</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {courses.map((course) => (
                                <tr key={course.id} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4">
                                        <p className="font-semibold text-gray-900">{course.title}</p>
                                        <p className="text-xs text-gray-500">Last updated: 2 days ago</p>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{course.students}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${course.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{course.price}</td>
                                    <td className="px-6 py-4 text-gray-600">{course.revenue}</td>
                                    <td className="px-6 py-4">
                                        <button className="text-blue-600 hover:text-blue-800 font-medium mr-3">Edit</button>
                                        <button className="text-gray-500 hover:text-gray-700">Stats</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {courses.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 mb-4">You haven't created any courses yet.</p>
                            <Button variant="primary" onClick={() => navigate('/lecturer/create-course')}>Create Your First Course</Button>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default LecturerCourses;
