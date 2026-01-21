// LecturerDashboard.jsx - Main control center for lecturers
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../../components/common/Button';
import StatsCard from '../components/StatsCard';
import LecturerSidebar from '../components/LecturerSidebar';

const LecturerDashboard = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    // Mock data - In production this would come from an API
    const stats = [
        { title: t('revenue'), value: '$12,450', icon: '💰', trend: 12, color: 'green' },
        { title: t('stats.students'), value: '1,240', icon: '👥', trend: 5, color: 'blue' },
        { title: t('stats.rating'), value: '4.8', icon: '⭐', trend: 0.2, color: 'orange' },
        { title: t('stats.courses'), value: '4', icon: '📚', trend: 0, color: 'purple' }
    ];

    const recentActivity = [
        { id: 1, user: 'Sarah Johnson', action: 'enrolled in', course: 'Web Development Bootcamp', time: '2 hours ago' },
        { id: 2, user: 'Mike Chen', action: 'left a review on', course: 'React Masterclass', time: '5 hours ago' },
        { id: 3, user: 'David Kim', action: 'completed', course: 'Python for Data Science', time: '1 day ago' },
    ];

    return (
        <div className="bg-gray-50 min-h-screen flex">
            {/* Sidebar */}
            <LecturerSidebar />

            {/* Main Content */}
            <main className="flex-1 p-8">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 font-heading">{t('dashboardOverview')}</h1>
                        <p className="text-gray-500 mt-1">{t('instructorSubtext')}</p>
                    </div>
                    <Button
                        variant="primary"
                        onClick={() => navigate('/lecturer/create-course')}
                    >
                        + {t('createCourse', 'Create New Course')}
                    </Button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <StatsCard key={index} {...stat} />
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Activity */}
                    <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4 font-heading">{t('recentActivity', 'Recent Activity')}</h2>
                        <div className="space-y-4">
                            {recentActivity.map((activity) => (
                                <div key={activity.id} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold me-4">
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
                        <h2 className="text-lg font-bold text-gray-900 mb-4 font-heading">{t('quickActions', 'Quick Actions')}</h2>
                        <div className="space-y-3">
                            <Button variant="secondary" className="w-full justify-start text-start" onClick={() => navigate('/lecturer/courses')}>
                                📚 {t('myCourses')}
                            </Button>
                            <Button variant="secondary" className="w-full justify-start text-start">
                                💬 {t('studentMessages', 'Student Messages')}
                            </Button>
                            <Button variant="secondary" className="w-full justify-start text-start">
                                💰 {t('earningsReport', 'Earnings Report')}
                            </Button>
                            <Button variant="secondary" className="w-full justify-start text-start">
                                ⚙️ {t('settings')}
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LecturerDashboard;
