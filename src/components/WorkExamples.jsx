import React from 'react';

const WorkExamples = ({ examples }) => (
    <div className="mt-8">
        <h2 className="text-2xl font-bold text-center">Our Work</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {examples.map((example, index) => (
                <div key={index} className="p-4 border rounded-lg">
                    <h3 className="text-xl font-semibold">{example.title}</h3>
                    <p>{example.description}</p>
                </div>
            ))}
        </div>
    </div>
);

export default WorkExamples;
