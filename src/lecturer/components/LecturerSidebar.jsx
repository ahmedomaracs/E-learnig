import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LecturerSidebar = () => {
    const { t } = useTranslation();

    return (
        <aside className="w-64 bg-white border-e border-gray-200 hidden lg:block min-h-screen shrink-0">
            <div className="p-6">
                <h2 className="font-heading font-semibold text-lg text-start mb-6 text-gray-800">
                    {t('dashboard')}
                </h2>

                <nav className="space-y-1">
                    <NavLink
                        to="/lecturer/dashboard"
                        className={({ isActive }) =>
                            `block px-3 py-2 rounded-md text-sm font-medium text-start transition-colors ${isActive
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`
                        }
                    >
                        {t('overview')}
                    </NavLink>
                    <NavLink
                        to="/lecturer/courses"
                        className={({ isActive }) =>
                            `block px-3 py-2 rounded-md text-sm font-medium text-start transition-colors ${isActive
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`
                        }
                    >
                        {t('myCourses')}
                    </NavLink>
                    <NavLink
                        to="/lecturer/analytics"
                        className={({ isActive }) =>
                            `block px-3 py-2 rounded-md text-sm font-medium text-start transition-colors ${isActive
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`
                        }
                    >
                        {t('analytics')}
                    </NavLink>
                    <NavLink
                        to="/lecturer/settings"
                        className={({ isActive }) =>
                            `block px-3 py-2 rounded-md text-sm font-medium text-start transition-colors ${isActive
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`
                        }
                    >
                        {t('settings')}
                    </NavLink>
                </nav>
            </div>
        </aside>
    );
};

export default LecturerSidebar;
