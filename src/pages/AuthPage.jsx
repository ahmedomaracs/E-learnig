import React, { useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleLoginSubmit = (data) => {
        console.log('Login Data:', data);
        // Here you would typically make an API call
        alert('Login submitted! Check console for data.');
    };

    const handleSignupSubmit = (data) => {
        console.log('Signup Data:', data);
        // Here you would typically make an API call
        alert('Signup submitted! Check console for data.');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

            <div className="relative sm:mx-auto sm:w-full sm:max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-white tracking-tight">
                        E-Learning Platform
                    </h1>
                    <p className="mt-2 text-lg text-gray-200">
                        Master new skills with our expert-led courses
                    </p>
                </div>

                {isLogin ? (
                    <LoginForm
                        onSubmit={handleLoginSubmit}
                        onSwitchToSignup={() => setIsLogin(false)}
                    />
                ) : (
                    <SignupForm
                        onSubmit={handleSignupSubmit}
                        onSwitchToLogin={() => setIsLogin(true)}
                    />
                )}
            </div>
        </div>
    );
};

export default AuthPage;
