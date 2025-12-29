import React from 'react';

const MainLayout = ({ user, onLogout }) => {
    const [currentView, setCurrentView] = React.useState('home');

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation Bar */}
            <nav className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-8">
                            <h1 className="text-2xl font-bold text-indigo-600">E-Learning</h1>
                            
                            {/* Navigation Links */}
                            <button
                                onClick={() => setCurrentView('home')}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                                    currentView === 'home' 
                                        ? 'bg-indigo-100 text-indigo-700' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                Home
                            </button>
                            <button
                                onClick={() => setCurrentView('courses')}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                                    currentView === 'courses' 
                                        ? 'bg-indigo-100 text-indigo-700' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                Courses
                            </button>
                            <button
                                onClick={() => setCurrentView('profile')}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                                    currentView === 'profile' 
                                        ? 'bg-indigo-100 text-indigo-700' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                Profile
                            </button>
                        </div>
                        
                        <div className="flex items-center gap-6">
                            <span className="text-gray-700">Welcome, {user?.email}</span>
                            <button 
                                onClick={onLogout}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            
            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {currentView === 'home' && (
                    <>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Dashboard</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <button
                                onClick={() => setCurrentView('courses')}
                                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-left"
                            >
                                <h3 className="text-xl font-semibold mb-2">Courses</h3>
                                <p className="text-gray-600">Browse available courses</p>
                            </button>
                            
                            <button
                                onClick={() => setCurrentView('profile')}
                                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-left"
                            >
                                <h3 className="text-xl font-semibold mb-2">Profile</h3>
                                <p className="text-gray-600">Manage your profile</p>
                            </button>
                            
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h3 className="text-xl font-semibold mb-2">Dashboard</h3>
                                <p className="text-gray-600">View your progress</p>
                            </div>
                        </div>
                    </>
                )}

                {currentView === 'courses' && (
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Courses</h2>
                        <p className="text-gray-600">Your courses content goes here...</p>
                    </div>
                )}

                {currentView === 'profile' && (
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Profile</h2>
                        <p className="text-gray-600">Profile settings go here...</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default MainLayout;