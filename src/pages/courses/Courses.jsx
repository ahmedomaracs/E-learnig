import React, { useEffect, useState } from 'react';
import api from '../../api/axios';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock fetching courses
        // api.get('/courses').then(...)
        setTimeout(() => {
            setCourses([
                { id: 1, title: 'React Fundamentals', instructor: 'Jane Doe', progress: 60 },
                { id: 2, title: 'Advanced .NET API', instructor: 'John Smith', progress: 10 },
                { id: 3, title: 'UI/UX Design Principles', instructor: 'Alice Johnson', progress: 0 },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="space-y-6">
            <header className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Browse Catalog
                </button>
            </header>

            {loading ? (
                <div className="text-center py-12">
                    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-indigo-600" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-2 text-gray-500">Loading courses...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course) => (
                        <div key={course.id} className="bg-white overflow-hidden shadow rounded-lg flex flex-col">
                            <div className="h-40 bg-gray-200 flex items-center justify-center">
                                <span className="text-4xl">🎓</span>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <h3 className="text-lg font-medium text-gray-900">{course.title}</h3>
                                <p className="mt-1 text-sm text-gray-500">Instructor: {course.instructor}</p>
                                <div className="mt-4 flex-1">
                                    <div className="relative pt-1">
                                        <div className="flex mb-2 items-center justify-between">
                                            <div>
                                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                                                    Progress
                                                </span>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-xs font-semibold inline-block text-indigo-600">
                                                    {course.progress}%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                                            <div style={{ width: `${course.progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
                                        </div>
                                    </div>
                                </div>
                                <button className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100">
                                    Continue Learning
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Courses;
