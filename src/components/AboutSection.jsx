import React from 'react';

const AboutSection = ({ about }) => (
    <div className="mt-8">
        <h2 className="text-2xl font-bold text-center">About Us</h2>
        <div className="container mx-auto p-4">
            <p>{about}</p>
        </div>
    </div>
);

export default AboutSection;
