// CourseSidebar.jsx - Sticky sidebar for course details
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';

const CourseSidebar = ({ course, isEnrolled, onEnroll }) => {
    const { price, duration, projectCount, features } = course;
    const navigate = useNavigate();

    return (
        <div className="sticky top-24">
            {/* Video Preview / Thumbnail */}
            <div className="rounded-xl overflow-hidden mb-6 shadow-lg group relative">
                <div className="aspect-video bg-gray-900 relative">
                    <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl cursor-pointer transform group-hover:scale-110 transition">
                            <span className="text-2xl text-black ml-1">▶</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl font-bold" style={{ color: '"var(--text-primary)"' }}>
                        {price}
                    </span>
                    {price !== 'Free' && (
                        <span className="text-lg line-through" style={{ color: '"var(--text-muted)"' }}>
                            $199
                        </span>
                    )}
                </div>

                {isEnrolled ? (
                    <Button
                        variant="primary"
                        size="lg"
                        className="w-full mb-4"
                        onClick={onEnroll}
                    >
                        Go to Course
                    </Button>
                ) : (
                    <Button
                        variant="primary"
                        size="lg"
                        className="w-full mb-4"
                        onClick={onEnroll}
                    >
                        Enroll Now
                    </Button>
                )}

                <p className="text-center text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
                    30-Day Money-Back Guarantee
                </p>

                {/* Course Features */}
                <div className="space-y-4">
                    <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                        This course includes:
                    </h4>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm">
                            <span>📺</span> {duration} on-demand video
                        </li>
                        <li className="flex items-center gap-3 text-sm">
                            <span>📂</span> {course.level} Level
                        </li>
                        {features && features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-sm">
                                <span>✅</span> {feature}
                            </li>
                        ))}
                        <li className="flex items-center gap-3 text-sm">
                            <span>📱</span> Access on mobile and TV
                        </li>
                        <li className="flex items-center gap-3 text-sm">
                            <span>🏆</span> Certificate of completion
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CourseSidebar;
