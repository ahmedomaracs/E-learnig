// LessonHeader.jsx - Display lesson title and navigation context
import React from 'react';

const LessonHeader = ({ title, courseTitle, onNext, hasNext }) => {
    return (
        <div className="mb-6 border-b border-gray-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
                <h4 className="text-sm text-gray-500 mb-1">{courseTitle}</h4>
                <h2 className="text-2xl font-bold text-gray-900 leading-tight">{title}</h2>
            </div>

            {hasNext && (
                <button
                    onClick={onNext}
                    className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition py-2"
                >
                    Next Lesson <span>→</span>
                </button>
            )}
        </div>
    );
};

export default LessonHeader;
