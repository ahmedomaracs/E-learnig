// Footer Component
// Site footer with links, social media, and copyright

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../common/Container';

const Footer = () => {
    const { t } = useTranslation();

    const footerSections = [
        {
            title: t('footer.about'),
            links: [
                { name: t('footer.aboutUs'), path: '/about' },
                { name: t('footer.careers'), path: '/careers' },
                { name: t('footer.press'), path: '/press' }
            ]
        },
        {
            title: t('footer.support'),
            links: [
                { name: t('footer.contact'), path: '/contact' },
                { name: t('footer.helpCenter'), path: '/help' },
                { name: t('footer.faq'), path: '/faq' }
            ]
        },
        {
            title: t('footer.legal'),
            links: [
                { name: t('footer.privacyPolicy'), path: '/privacy' },
                { name: t('footer.termsConditions'), path: '/terms' },
                { name: t('footer.cookiePolicy'), path: '/cookies' }
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
                        <h3 className="font-bold mb-4">{t('footer.followUs')}</h3>
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
                    <p>{t('footer.copyright')}</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
