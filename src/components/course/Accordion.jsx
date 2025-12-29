// Accordion Component
// Expandable sections for course curriculum

import React, { useState } from 'react';

const Accordion = ({ sections }) => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    return (
        <div className="space-y-2">
            {sections.map((section, index) => {
                const isOpen = openSection === index;
                const lectureCount = section.lectures.length;
                const totalDuration = section.lectures.reduce((acc, lecture) => {
                    const mins = parseInt(lecture.duration);
                    return acc + mins;
                }, 0);

                return (
                    <div
                        key={index}
                        className="border rounded-lg overflow-hidden"
                        style={{ borderColor: 'var(--border-light)' }}
                    >
                        {/* Section Header */}
                        <button
                            onClick={() => toggleSection(index)}
                            className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-opacity-50 transition"
                            style={{ backgroundColor: isOpen ? 'var(--bg-secondary)' : 'white' }}
                            aria-expanded={isOpen}
                            aria-controls={`section-${index}`}
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    className="transform transition-transform"
                                    style={{
                                        transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                                        color: 'var(--text-primary)'
                                    }}
                                >
                                    ▶
                                </span>
                                <span className="font-semibold text-left" style={{ color: 'var(--text-primary)' }}>
                                    {section.title}
                                </span>
                            </div>
                            <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                                {lectureCount} lectures • {totalDuration} min
                            </span>
                        </button>

                        {/* Section Content */}
                        {isOpen && (
                            <div
                                id={`section-${index}`}
                                className="px-6 py-4 bg-white"
                                style={{ borderTop: '1px solid var(--border-light)' }}
                            >
                                <div className="space-y-3">
                                    {section.lectures.map((lecture, lectureIndex) => (
                                        <div
                                            key={lectureIndex}
                                            className="flex justify-between items-center py-2"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span style={{ color: 'var(--text-muted)' }}>▶</span>
                                                <span style={{ color: 'var(--text-primary)' }}>{lecture.title}</span>
                                                {lecture.isFree && (
                                                    <span
                                                        className="text-xs px-2 py-1 rounded"
                                                        style={{
                                                            backgroundColor: 'var(--brand-primary)',
                                                            color: 'white'
                                                        }}
                                                    >
                                                        FREE
                                                    </span>
                                                )}
                                            </div>
                                            <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                                                {lecture.duration}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Accordion;
