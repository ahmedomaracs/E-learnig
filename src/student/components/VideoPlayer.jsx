// VideoPlayer.jsx - Wrapper for video playback
import React from 'react';

const VideoPlayer = ({ videoUrl, title, onEnded, autoPlay = false }) => {
    return (
        <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-md relative group">
            {/* In a real app, you might use a library like react-player here */}
            <video
                key={videoUrl} // Force re-render on url change
                src={videoUrl || "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"} // Fallback sample video
                className="w-full h-full object-contain"
                controls
                autoPlay={autoPlay}
                onEnded={onEnded}
                poster={!videoUrl ? "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" : undefined}
            >
                Your browser does not support the video tag.
            </video>

            {!videoUrl && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/50">
                    <div className="text-white text-center p-4">
                        <p className="font-bold">Mock Video Player</p>
                        <p className="text-sm opacity-75">Sample video loaded for demo</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;
