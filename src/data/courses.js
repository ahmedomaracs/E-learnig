// Course Data Model
// This centralizes all course data and makes it easy to replace with API calls later

export const courses = [
    {
        id: "web-development-bootcamp",
        title: "Complete Web Development Bootcamp",
        description: "Master full-stack web development from scratch. Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build 10+ real-world projects and deploy them to production.",
        instructor: "Ahmed Hassan",
        rating: 4.9,
        reviewsCount: 1250,
        studentsCount: 21000,
        price: 0,
        originalPrice: 99,
        duration: "40h",
        lessonsCount: 54,
        level: "Beginner",
        thumbnail: "/images/web-dev.png",
        techStack: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        lastUpdated: "December 2024",
        sections: [
            {
                title: "Getting Started",
                lectures: [
                    { title: "Course Introduction", duration: "10 min", isFree: true },
                    { title: "Setting Up Your Environment", duration: "15 min", isFree: true },
                    { title: "Your First Web Page", duration: "20 min", isFree: false }
                ]
            },
            {
                title: "HTML Fundamentals",
                lectures: [
                    { title: "HTML Document Structure", duration: "18 min", isFree: false },
                    { title: "Text Elements", duration: "22 min", isFree: false },
                    { title: "Links and Images", duration: "25 min", isFree: false },
                    { title: "Forms and Inputs", duration: "30 min", isFree: false }
                ]
            },
            {
                title: "CSS Mastery",
                lectures: [
                    { title: "CSS Selectors", duration: "20 min", isFree: false },
                    { title: "Box Model", duration: "25 min", isFree: false },
                    { title: "Flexbox Layout", duration: "35 min", isFree: false },
                    { title: "Grid Layout", duration: "40 min", isFree: false }
                ]
            }
        ],
        features: [
            "40 hours of video content",
            "54 downloadable resources",
            "Lifetime access",
            "Certificate of completion",
            "30-day money-back guarantee"
        ]
    },
    {
        id: "python-data-science",
        title: "Python for Data Science",
        description: "Learn Python programming and data analysis. Master NumPy, Pandas, Matplotlib, and Scikit-learn. Work with real datasets and build ML models.",
        instructor: "Sara Mohamed",
        rating: 4.8,
        reviewsCount: 890,
        studentsCount: 15000,
        price: 49,
        originalPrice: 89,
        duration: "30h",
        lessonsCount: 42,
        level: "Intermediate",
        thumbnail: "/images/python-ds.png",
        techStack: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
        lastUpdated: "November 2024",
        sections: [
            {
                title: "Python Basics",
                lectures: [
                    { title: "Python Installation", duration: "12 min", isFree: true },
                    { title: "Variables and Data Types", duration: "20 min", isFree: false },
                    { title: "Control Flow", duration: "25 min", isFree: false }
                ]
            },
            {
                title: "Data Analysis with Pandas",
                lectures: [
                    { title: "Introduction to Pandas", duration: "18 min", isFree: false },
                    { title: "DataFrames", duration: "30 min", isFree: false },
                    { title: "Data Cleaning", duration: "35 min", isFree: false }
                ]
            }
        ],
        features: [
            "30 hours of video",
            "Real-world datasets",
            "Jupyter notebooks included",
            "Certificate of completion",
            "Q&A support"
        ]
    },
    {
        id: "react-nextjs-masterclass",
        title: "React & Next.js Masterclass",
        description: "Build modern web applications with React 18 and Next.js 14. Learn Server Components, App Router, and deploy production apps.",
        instructor: "Omar Ali",
        rating: 4.9,
        reviewsCount: 2100,
        studentsCount: 28000,
        price: 69,
        originalPrice: 119,
        duration: "35h",
        lessonsCount: 48,
        level: "Advanced",
        thumbnail: "/images/react-next.png",
        techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        lastUpdated: "December 2024",
        sections: [
            {
                title: "React Fundamentals",
                lectures: [
                    { title: "React 18 Overview", duration: "15 min", isFree: true },
                    { title: "Components and Props", duration: "25 min", isFree: false },
                    { title: "State and Hooks", duration: "30 min", isFree: false }
                ]
            },
            {
                title: "Next.js App Router",
                lectures: [
                    { title: "Server Components", duration: "35 min", isFree: false },
                    { title: "Routing and Navigation", duration: "28 min", isFree: false },
                    { title: "Data Fetching", duration: "40 min", isFree: false }
                ]
            }
        ],
        features: [
            "35 hours of content",
            "10+ production projects",
            "TypeScript included",
            "Deployment guides",
            "Private Discord community"
        ]
    },
    {
        id: "ai-machine-learning",
        title: "AI & Machine Learning Essentials",
        description: "Introduction to AI and machine learning concepts. Build and train models using TensorFlow and Keras. Understand neural networks and deep learning.",
        instructor: "Heba Ibrahim",
        rating: 4.7,
        reviewsCount: 650,
        studentsCount: 12000,
        price: 59,
        originalPrice: 99,
        duration: "25h",
        lessonsCount: 36,
        level: "Intermediate",
        thumbnail: "/images/ai-ml.png",
        techStack: ["Python", "TensorFlow", "Keras", "NumPy"],
        lastUpdated: "October 2024",
        sections: [
            {
                title: "AI Fundamentals",
                lectures: [
                    { title: "What is AI?", duration: "12 min", isFree: true },
                    { title: "Machine Learning Basics", duration: "20 min", isFree: false },
                    { title: "Types of ML", duration: "18 min", isFree: false }
                ]
            },
            {
                title: "Neural Networks",
                lectures: [
                    { title: "Introduction to Neural Networks", duration: "25 min", isFree: false },
                    { title: "Training Models", duration: "30 min", isFree: false },
                    { title: "Deep Learning", duration: "35 min", isFree: false }
                ]
            }
        ],
        features: [
            "25 hours of video",
            "Hands-on projects",
            "Jupyter notebooks",
            "Certificate included",
            "Lifetime updates"
        ]
    }
];
