// Refactored HomePage - Clean architecture with auth integration
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/context/AuthContext';
import Container from '../components/common/Container';
import SectionHeader from '../components/common/SectionHeader';
import CourseGrid from '../components/course/CourseGrid';
import Button from '../components/common/Button';
import { getAllCourses } from '../services/courseService';

const HomePage = () => {
    const courses = getAllCourses();
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    const handleStartLearning = () => {
        if (isAuthenticated) {
            navigate('/catalog');
        } else {
            navigate('/signup');
        }
    };

    const handleBrowseCourses = () => {
        navigate('/catalog');
    };

    return (
        <div>
            {/* Hero Section */}
            <section style={{ backgroundColor: 'var(--bg-main)', paddingTop: '80px', paddingBottom: '80px' }}>
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                                Learn Skills That Get You Hired
                            </h1>
                            <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
                                Online courses in programming, data, and business taught by industry experts
                            </p>
                            <div className="flex gap-4">
                                <Button variant="primary" size="lg" onClick={handleStartLearning}>
                                    Start Learning
                                </Button>
                                <Button variant="secondary" size="lg" onClick={handleBrowseCourses}>
                                    Browse Courses
                                </Button>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                                <div className="text-6xl font-bold" style={{ color: 'var(--brand-primary)' }}>E</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Social Proof / Trust Strip */}
            <section className="bg-white" style={{ paddingTop: '48px', paddingBottom: '48px', borderBottom: '1px solid var(--border-light)' }}>
                <Container>
                    <p className="text-center text-sm font-medium mb-8" style={{ color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                        TRUSTED BY LEARNERS FROM
                    </p>
                    <div className="flex justify-center items-center gap-12 flex-wrap opacity-40">
                        {['MIT', 'Stanford', 'Google', 'Microsoft', 'Meta', 'Amazon'].map((logo, index) => (
                            <div key={index} className="text-xl font-bold" style={{ color: 'var(--text-primary)', filter: 'grayscale(100%)' }}>
                                {logo}
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Trust & Social Proof - Stats */}
            <section className="bg-white" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: '50,000+', label: 'Students', color: 'var(--brand-primary)' },
                            { number: '1,200+', label: 'Courses', color: 'var(--brand-primary)' },
                            { number: '300+', label: 'Instructors', color: 'var(--brand-primary)' },
                            { number: '★ 4.8', label: 'Average Rating', color: 'var(--rating-gold)' }
                        ].map((stat, index) => (
                            <div key={index}>
                                <p className="text-4xl font-bold mb-2" style={{ color: stat.color }}>{stat.number}</p>
                                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Featured Courses */}
            <section id="courses" className="bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                <Container>
                    <SectionHeader
                        title="Learn from the best"
                        subtitle="Explore our most popular courses taught by industry experts"
                    />
                    <div className="mt-12">
                        <CourseGrid courses={courses} />
                    </div>

                    {/* View All Button */}
                    <div className="text-center mt-12">
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={() => navigate('/catalog')}
                        >
                            View All Courses →
                        </Button>
                    </div>
                </Container>
            </section>

            {/* How It Works */}
            <section id="how-it-works" style={{ backgroundColor: 'var(--bg-secondary)', paddingTop: '80px', paddingBottom: '80px' }}>
                <Container>
                    <SectionHeader
                        title="How It Works"
                        subtitle="Start learning in just four simple steps"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
                        {[
                            { step: '1', title: 'Choose a Course', desc: 'Browse 1,200+ courses' },
                            { step: '2', title: 'Learn at Your Pace', desc: 'Study anytime, anywhere' },
                            { step: '3', title: 'Get Certified', desc: 'Earn industry certificates' },
                            { step: '4', title: 'Apply Skills', desc: 'Build real projects' }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div
                                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
                                    style={{ backgroundColor: 'var(--brand-primary)', color: 'white' }}
                                >
                                    {item.step}
                                </div>
                                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section style={{ backgroundColor: 'var(--bg-secondary)', paddingTop: '96px', paddingBottom: '96px' }}>
                <Container maxWidth="4xl">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                            Start Your Learning Journey Today
                        </h2>
                        <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                            Join 50,000+ students already learning new skills
                        </p>
                        <Button variant="primary" size="lg" onClick={handleStartLearning}>
                            {isAuthenticated ? 'Browse Courses' : 'Sign Up Free'}
                        </Button>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default HomePage;