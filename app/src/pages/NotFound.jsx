import React from 'react';

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
            <p className="text-lg text-gray-700">Strona, której szukasz, nie istnieje.</p>
            <a href="/" className="mt-4 text-blue-500 hover:underline">
                Wróć na stronę główną
            </a>
        </div>
    );
}

export default NotFound;