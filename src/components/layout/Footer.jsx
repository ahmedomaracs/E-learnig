// Footer Component
// Site footer with links, social media, and copyright

import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const Footer = () => {
    const footerSections = [
        {
            title: 'About',
            links: [
                { name: 'About Us', path: '/about' },
                { name: 'Careers', path: '/careers' },
                { name: 'Press', path: '/press' }
            ]
        },
        {
            title: 'Support',
            links: [
                { name: 'Contact', path: '/contact' },
                { name: 'Help Center', path: '/help' },
                { name: 'FAQ', path: '/faq' }
            ]
        },
        {
            title: 'Legal',
            links: [
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms & Conditions', path: '/terms' },
                { name: 'Cookie Policy', path: '/cookies' }
            ]
        }
    ];

    const socialLinks = [
        { name: 'Facebook', url: '#' },
        { name: 'Twitter', url: '#' },
        { name: 'Instagram', url: '#' },
        { name: 'LinkedIn', url: '#' }
    ];

    return (
        <footer className="text-white" style={{ backgroundColor: 'var(--footer-bg)', paddingTop: '48px', paddingBottom: '32px' }}>
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-bold mb-4">{section.title}</h3>
                            <ul className="space-y-2 text-sm" style={{ color: 'var(--footer-text)' }}>
                                {section.links.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className="hover:opacity-80 transition"
                                            style={{ color: 'var(--footer-text)' }}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Social Media */}
                    <div>
                        <h3 className="font-bold mb-4">Follow Us</h3>
                        <div className="flex gap-4 text-sm">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className="hover:opacity-80 transition"
                                    style={{ color: 'var(--footer-link)' }}
                                    aria-label={social.name}
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div
                    className="border-t pt-8 text-center text-sm"
                    style={{ borderColor: 'var(--footer-divider)', color: 'var(--footer-text)' }}
                >
                    <p>© 2025 E-Learning Platform. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
