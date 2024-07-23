import React from 'react';
import ServiceSection from '../components/ServiceSection';
import AboutSection from '../components/AboutSection';

const ServicesPage = () => {
    const services = [
        { title: 'Service 1', description: 'Description of service 1' },
        { title: 'Service 2', description: 'Description of service 2' },
    ];

    const about = 'Information about SymbolTM...';

    return (
        <div>
            <ServiceSection services={services} />
            <AboutSection about={about} />
        </div>
    );
};

export default ServicesPage;
