import React from 'react';

const ServiceSection = ({ services }) => (
    <div className="mt-8">
        <h2 className="text-2xl font-bold text-center">Our Services</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {services.map((service, index) => (
                <div key={index} className="p-4 border rounded-lg">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    </div>
);

export default ServiceSection;
