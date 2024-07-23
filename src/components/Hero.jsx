import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = ({ title, subtitle }) => {
    useEffect(() => {
        gsap.fromTo(".hero-title", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
        gsap.fromTo(".hero-subtitle", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
    }, []);

    return (
        <div className="bg-gray-200 p-8 text-center">
            <h1 className="hero-title text-4xl font-bold">{title}</h1>
            <p className="hero-subtitle text-xl mt-4">{subtitle}</p>
        </div>
    );
};

export default Hero;
