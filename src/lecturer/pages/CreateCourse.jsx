// CreateCourse.jsx - Basic course creation wizard
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';

const CreateCourse = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to create draft course would go here
        console.log('Creating course:', title);
        // Redirect to edit page (simulated)
        navigate('/lecturer/courses');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <Container maxWidth="4xl">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Name Your Course</h1>
                    <p className="mt-2 text-gray-600">What would you like to call your new course? Don't worry, you can change this later.</p>
                </div>

                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Course Title
                            </label>
                            <div className="mt-1">
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="e.g. Advanced React Patterns"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <p className="mt-2 text-sm text-gray-500">
                                Great titles are short, descriptive, and catchy.
                            </p>
                        </div>

                        <div className="flex justify-end gap-3">
                            <Button variant="secondary" onClick={() => navigate('/lecturer/dashboard')}>
                                Cancel
                            </Button>
                            <Button type="submit" variant="primary">
                                Continue
                            </Button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default CreateCourse;
