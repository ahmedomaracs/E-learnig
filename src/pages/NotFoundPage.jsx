// NotFoundPage Component
// 404 error page

import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import Button from '../components/common/Button';

const NotFoundPage = () => {
    return (
        <div style={{ paddingTop: '96px', paddingBottom: '96px' }}>
            <Container maxWidth="4xl">
                <div className="text-center">
                    <h1
                        className="text-9xl font-bold mb-4"
                        style={{ color: 'var(--brand-primary)' }}
                    >
                        404
                    </h1>
                    <h2
                        className="text-4xl font-bold mb-6"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        Page Not Found
                    </h2>
                    <p
                        className="text-lg mb-8"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        Sorry, the page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link to="/">
                        <Button variant="primary" size="lg">
                            Go Back Home
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default NotFoundPage;
