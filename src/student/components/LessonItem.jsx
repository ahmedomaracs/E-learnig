// LessonItem.jsx - Individual lesson component for the sidebar
import React from 'react';

const LessonItem = ({ lesson, isActive, isCompleted, onClick }) => {
    return (
        <button
            onClick={() => onClick(lesson)}
            className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors duration-200 ${isActive
                    ? 'bg-blue-50 border-r-4 border-blue-600'
                    : 'hover:bg-gray-50 border-b border-gray-50'
                } focus:outline-none focus:bg-gray-50`}
            aria-current={isActive ? 'step' : undefined}
        >
            <div className="mt-1 flex-shrink-0">
                <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${isCompleted
                            ? 'bg-green-500 border-green-500 text-white'
                            : 'border-gray-400 text-transparent'
                        }`}
                >
                    <span className="text-xs font-bold">✓</span>
                </div>
            </div>

            <div className="min-w-0">
                <p className={`text-sm truncate ${isActive ? 'font-semibold text-blue-900' : 'text-gray-700'
                    }`}>
                    {lesson.title}
                </p>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                        <span>📺</span> {lesson.duration}
                    </span>
                    {isActive && (
                        <span className="text-xs font-medium text-blue-600 animate-pulse">
                            Playing...
                        </span>
                    )}
                </div>
            </div>
        </button>
    );
};

export default LessonItem;
