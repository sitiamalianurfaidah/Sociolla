// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* About Wardah */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">About Wardah</h3>
                    <p className="text-sm">
                        Wardah is a leading beauty brand in Indonesia, offering high-quality skincare, makeup, and wellness products. 
                        Our mission is to help you enhance your natural beauty while caring for your skin with trusted, halal, and cruelty-free formulations.
                    </p>
                </div>

                {/* Product Categories */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Shop</h3>
                    <ul className="text-sm">
                        <li><a href="#skincare" className="hover:text-purple-400">Skincare</a></li>
                        <li><a href="#makeup" className="hover:text-purple-400">Makeup</a></li>
                        <li><a href="#haircare" className="hover:text-purple-400">Haircare</a></li>
                        <li><a href="#wellness" className="hover:text-purple-400">Wellness</a></li>
                    </ul>
                </div>

                {/* Customer Support */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Customer Support</h3>
                    <ul className="text-sm">
                        <li><a href="#faq" className="hover:text-purple-400">FAQ</a></li>
                        <li><a href="#shipping" className="hover:text-purple-400">Shipping & Returns</a></li>
                        <li><a href="#contact" className="hover:text-purple-400">Contact Us</a></li>
                        <li><a href="#reviews" className="hover:text-purple-400">Product Reviews</a></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                    <ul className="text-sm">
                        <li><a href="https://www.instagram.com/wardahbeauty/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">Instagram</a></li>
                        <li><a href="https://www.facebook.com/wardahbeauty/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">Facebook</a></li>
                        <li><a href="https://www.youtube.com/wardahbeauty" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">YouTube</a></li>
                        <li><a href="https://www.tiktok.com/@wardahbeauty" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">TikTok</a></li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-sm mt-12">
                <p>&copy; 2025 Sociolla. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
