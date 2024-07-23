import React from 'react';

const Navbar = () => (
    <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-2xl">SymbolTM</h1>
            <div className="space-x-4">
                <a href="/" className="text-white">Home</a>
                <a href="/services" className="text-white">Services</a>
                <a href="/contact" className="text-white">Contact</a>
            </div>
        </div>
    </nav>
);

export default Navbar;