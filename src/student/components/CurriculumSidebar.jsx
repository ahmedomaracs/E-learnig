// CurriculumSidebar.jsx - Navigation for course content
import React, { useState } from 'react';
import LessonItem from './LessonItem';

const CurriculumSidebar = ({ sections, currentLessonId, onSelectLesson, completedLessons = [] }) => {
    // Simple accordion state - all open by default for now
    const [openSections, setOpenSections] = useState(
        sections.reduce((acc, _, idx) => ({ ...acc, [idx]: true }), {})
    );

    const toggleSection = (idx) => {
        setOpenSections(prev => ({ ...prev, [idx]: !prev[idx] }));
    };

    return (
        <div className="h-full flex flex-col bg-white border-r border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
                <h3 className="font-bold text-gray-900">Course Content</h3>
            </div>

            <div className="flex-grow overflow-y-auto">
                {sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                        {/* Section Header */}
                        <button
                            onClick={() => toggleSection(sectionIndex)}
                            className="w-full bg-gray-100 px-4 py-3 border-b border-gray-200 flex justify-between items-center hover:bg-gray-200 transition-colors focus:outline-none"
                        >
                            <h4 className="font-semibold text-sm text-gray-800 truncate pr-2">
                                Section {sectionIndex + 1}: {section.title}
                            </h4>
                            <span className={`transform transition-transform duration-200 text-gray-500 ${openSections[sectionIndex] ? 'rotate-180' : ''}`}>
                                ▼
                            </span>
                        </button>

                        {/* Lessons List */}
                        {openSections[sectionIndex] && (
                            <div className="bg-white">
                                {section.lessons.map((lesson) => (
                                    <LessonItem
                                        key={lesson.id}
                                        lesson={lesson}
                                        isActive={lesson.id === currentLessonId}
                                        isCompleted={completedLessons.includes(lesson.id)}
                                        onClick={onSelectLesson}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CurriculumSidebar;
