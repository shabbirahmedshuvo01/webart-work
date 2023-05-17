import React from 'react';

const NotFound = () => {
    return (
        <div>
            <div class="bg-gray-200">
                <div class="flex items-center justify-center h-screen">
                    <div class="bg-white p-8 rounded-lg shadow-md">
                        <h1 class="text-4xl font-bold mb-6">404 - Page Not Found</h1>
                        <p class="text-lg mb-6">The page you're looking for does not exist.</p>
                        <a href="/" class="text-blue-500 hover:underline">Go back to the homepage</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;