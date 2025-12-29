// LessonActions.jsx - User actions for the current lesson
import React from 'react';
import Button from '../../components/common/Button';

const LessonActions = ({ isCompleted, onToggleComplete, onNext, hasNext }) => {
    return (
        <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-gray-100">
            <Button
                variant={isCompleted ? "success" : "primary"}
                onClick={onToggleComplete}
                className="flex items-center gap-2 min-w-[160px] justify-center"
            >
                {isCompleted ? (
                    <>
                        <span>✓</span> Completed
                    </>
                ) : (
                    "Mark as Complete"
                )}
            </Button>

            {hasNext && (
                <Button
                    variant="secondary"
                    onClick={onNext}
                    className="flex items-center gap-2"
                >
                    Next Lesson
                </Button>
            )}

            <div className="ml-auto text-sm text-gray-500">
                Need help? <a href="#" className="text-blue-600 hover:underline">Ask in Q&A</a>
            </div>
        </div>
    );
};

export default LessonActions;
