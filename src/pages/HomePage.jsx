import React from 'react';
import Hero from '../components/Hero';
import WorkExamples from '../components/WorkExamples';

const HomePage = () => {
    const workExamples = [
        { title: 'Project 1', description: 'Description of project 1' },
        { title: 'Project 2', description: 'Description of project 2' },
        { title: 'Project 3', description: 'Description of project 3' },
    ];

    return (
        <div>
            <Hero title="Welcome to SymbolTM" subtitle="Your Subtitle Here" />
            <WorkExamples examples={workExamples} />
        </div>
    );
};

export default HomePage;
