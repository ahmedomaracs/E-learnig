// Layout Component
// Main layout wrapper with Navbar and Footer

import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../auth/context/AuthContext';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-main)' }}>
            <Navbar user={user} onLogout={logout} />

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
