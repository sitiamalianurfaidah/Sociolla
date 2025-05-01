import React, { useState } from 'react';
import 'animate.css';
import Product1 from '../assets/product1.jpg';
import Product2 from '../assets/product2.png';
import Product3 from '../assets/product3.jpg';
import Product4 from '../assets/product4.jpg';
import Product5 from '../assets/product5.png';
import Product6 from '../assets/product6.jpg';
import Product7 from '../assets/product7.webp';
import Product8 from '../assets/product8.jpg';
import Product9 from '../assets/product9.avif';
import Product10 from '../assets/product10.jpg';
import Product11 from '../assets/product11.webp';
import Product12 from '../assets/product12.jpg';
import Product13 from '../assets/product13.webp';
import Product14 from '../assets/product14.jpg';
import Product15 from '../assets/product15.webp';
import Product16 from '../assets/product16.png';

const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState('Skincare');
    const [searchQuery, setSearchQuery] = useState('');

    const products = {
        Skincare: [
            { title: 'Serum Brightening', description: 'Helps reduce dark spots and brighten skin naturally.', price: 'Rp120.000', image: Product1 },
            { title: 'Moisturizer Hydrating', description: 'Keeps skin moisturized all day with a lightweight formula.', price: 'Rp95.000', image: Product2 },
            { title: 'SPF Sunscreen 50+', description: 'Protects your skin from harmful UV rays and pollution.', price: 'Rp110.000', image: Product3 },
            { title: 'Face Mask', description: 'Hydrating and refreshing mask for your skin.', price: 'Rp75.000', image: Product4 },
        ],
        Makeup: [
            { title: 'Lipstick Matte', description: 'Smooth matte finish with long-lasting color.', price: 'Rp90.000', image: Product5 },
            { title: 'Mascara Waterproof', description: 'Volumizing mascara for long, defined lashes.', price: 'Rp80.000', image: Product6 },
            { title: 'Blush On', description: 'Natural blush to brighten your face.', price: 'Rp60.000', image: Product7 },
            { title: 'Eyeliner Gel', description: 'Precise eyeliner for bold eyes.', price: 'Rp70.000', image: Product8 },
        ],
        Haircare: [
            { title: 'Shampoo Nourish', description: 'Nourishes hair and prevents dryness.', price: 'Rp100.000', image: Product9 },
            { title: 'Hair Serum', description: 'Smoothens and adds shine to your hair.', price: 'Rp110.000', image: Product10 },
            { title: 'Conditioner Repair', description: 'Repairs and strengthens damaged hair.', price: 'Rp90.000', image: Product11 },
            { title: 'Hair Oil', description: 'Adds softness and shine to your hair.', price: 'Rp85.000', image: Product12 },
        ],
        Wellness: [
            { title: 'Herbal Tea', description: 'Relaxing tea for stress relief.', price: 'Rp45.000', image: Product13 },
            { title: 'Aromatherapy Diffuser', description: 'Soothing diffuser for your home.', price: 'Rp150.000', image: Product14 },
            { title: 'Essential Oils', description: 'Natural oils for wellness and relaxation.', price: 'Rp75.000', image: Product15 },
            { title: 'Vitamin C', description: 'Boost your immunity with Vitamin C.', price: 'Rp65.000', image: Product16 },
        ],
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = products[selectedCategory].filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section className="w-full py-20 px-6 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
            <div className="max-w-7xl mx-auto">
                {/* Search Bar */}
                <div className="mb-8 text-center">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="p-3 rounded-lg w-1/2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Category Section */}
                <div className="flex justify-center space-x-6 mb-8">
                    {['Skincare', 'Makeup', 'Haircare', 'Wellness'].map(category => (
                        <button
                            key={category}
                            className={`text-lg font-bold p-3 rounded-md transition-colors duration-300 ${selectedCategory === category ? 'bg-purple-700 text-white' : 'text-purple-800'}`}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <h2 className="text-4xl font-extrabold text-center mb-10 text-purple-900 drop-shadow-md">
                    {selectedCategory} Products
                </h2>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-6 text-center transition duration-300 hover:shadow-2xl hover:-translate-y-1 animate__animated animate__fadeInUp"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full max-h-48 object-contain rounded-md mb-4"
                            />
                            <h3 className="text-lg font-semibold text-purple-700">{product.title}</h3>
                            <p className="text-sm text-gray-600 mt-2 mb-4">{product.description}</p>
                            <p className="text-md font-bold text-gray-500">{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
