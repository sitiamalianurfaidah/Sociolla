import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'animate.css';

const ItemList = () => {
    const products = [
        { title: 'Serum Brightening', description: 'Helps reduce dark spots and brighten skin naturally.', price: 'Rp120.000' },
        { title: 'Moisturizer Hydrating', description: 'Keeps skin moisturized all day with a lightweight formula.', price: 'Rp95.000' },
        { title: 'SPF Sunscreen 50+', description: 'Protects your skin from harmful UV rays and pollution.', price: 'Rp110.000' },
        { title: 'Face Mask', description: 'Hydrating and refreshing mask for your skin.', price: 'Rp75.000' },
        { title: 'Lipstick Matte', description: 'Smooth matte finish with long-lasting color.', price: 'Rp90.000' },
        { title: 'Mascara Waterproof', description: 'Volumizing mascara for long, defined lashes.', price: 'Rp80.000' },
        { title: 'Blush On', description: 'Natural blush to brighten your face.', price: 'Rp60.000' },
        { title: 'Eyeliner Gel', description: 'Precise eyeliner for bold eyes.', price: 'Rp70.000' },
        { title: 'Shampoo Nourish', description: 'Nourishes hair and prevents dryness.', price: 'Rp100.000' },
        { title: 'Hair Serum', description: 'Smoothens and adds shine to your hair.', price: 'Rp110.000' },
        { title: 'Conditioner Repair', description: 'Repairs and strengthens damaged hair.', price: 'Rp90.000' },
        { title: 'Hair Oil', description: 'Adds softness and shine to your hair.', price: 'Rp85.000' },
        { title: 'Herbal Tea', description: 'Relaxing tea for stress relief.', price: 'Rp45.000' },
        { title: 'Aromatherapy Diffuser', description: 'Soothing diffuser for your home.', price: 'Rp150.000' },
        { title: 'Essential Oils', description: 'Natural oils for wellness and relaxation.', price: 'Rp75.000' },
        { title: 'Vitamin C', description: 'Boost your immunity with Vitamin C.', price: 'Rp65.000' },
    ];

    const [searchQuery, setSearchQuery] = useState('');
    const [imageUrls, setImageUrls] = useState([]);

    // Fetch random images on component mount
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const imagePromises = Array.from({ length: products.length }, async () => {
                    const response = await axios.get('https://picsum.photos/200/200', { responseType: 'blob' });
                    return URL.createObjectURL(response.data);
                });

                const images = await Promise.all(imagePromises);
                setImageUrls(images);
            } catch (error) {
                console.error("Error fetching random images:", error);
            }
        };

        fetchImages();
    }, [products.length]);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-200 to-pink-300 flex justify-center items-center p-6">
            <div className="max-w-7xl mx-auto w-full">
                {/* Search Bar */}
                <div className="mb-8 text-center">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="p-3 rounded-lg w-1/2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <h2 className="text-4xl font-extrabold text-center mb-10 text-purple-900 drop-shadow-md">
                    All Products
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
                                src={imageUrls[index]}  /* Use the image URL from the fetched data */
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
        </div>
    );
};

export default ItemList;
