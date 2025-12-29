// LecturerDashboard.jsx - Main control center for lecturers
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import StatsCard from '../components/StatsCard';

const LecturerDashboard = () => {
    const navigate = useNavigate();

    // Mock data - In production this would come from an API
    const stats = [
        { title: 'Total Revenue', value: '$12,450', icon: '💰', trend: 12, color: 'green' },
        { title: 'Total Students', value: '1,240', icon: '👥', trend: 5, color: 'blue' },
        { title: 'Average Rating', value: '4.8', icon: '⭐', trend: 0.2, color: 'orange' },
        { title: 'Active Courses', value: '4', icon: '📚', trend: 0, color: 'purple' }
    ];

    const recentActivity = [
        { id: 1, user: 'Sarah Johnson', action: 'enrolled in', course: 'Web Development Bootcamp', time: '2 hours ago' },
        { id: 2, user: 'Mike Chen', action: 'left a review on', course: 'React Masterclass', time: '5 hours ago' },
        { id: 3, user: 'David Kim', action: 'completed', course: 'Python for Data Science', time: '1 day ago' },
    ];

    return (
        <div className="bg-gray-50 min-h-screen pb-12">
            <div className="bg-white border-b border-gray-200 mb-8">
                <Container>
                    <div className="py-8 flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Lecturer Dashboard</h1>
                            <p className="text-gray-500">Welcome back, managing your courses and students.</p>
                        </div>
                        <Button
                            variant="primary"
                            onClick={() => navigate('/lecturer/create-course')}
                        >
                            + Create New Course
                        </Button>
                    </div>
                </Container>
            </div>

            <Container>
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <StatsCard key={index} {...stat} />
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Activity */}
                    <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h2>
                        <div className="space-y-4">
                            {recentActivity.map((activity) => (
                                <div key={activity.id} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
                                        {activity.user.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-900">
                                            <span className="font-semibold">{activity.user}</span> {activity.action} <span className="font-semibold">{activity.course}</span>
                                        </p>
                                        <p className="text-xs text-gray-500">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 text-center">
                            <Button variant="ghost" size="sm">View All Activity</Button>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
                        <div className="space-y-3">
                            <Button variant="secondary" className="w-full justify-start text-left" onClick={() => navigate('/lecturer/courses')}>
                                📚 My Courses
                            </Button>
                            <Button variant="secondary" className="w-full justify-start text-left">
                                💬 Student Messages
                            </Button>
                            <Button variant="secondary" className="w-full justify-start text-left">
                                💰 Earnings Report
                            </Button>
                            <Button variant="secondary" className="w-full justify-start text-left">
                                ⚙️ Settings
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default LecturerDashboard;
