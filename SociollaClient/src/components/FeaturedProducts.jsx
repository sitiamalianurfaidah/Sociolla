import React, { useEffect, useRef } from 'react';
import Product1 from '../assets/product17.jpg';
import Product2 from '../assets/product18.png';
import Product3 from '../assets/product19.jpg';
import Product4 from '../assets/product20.png';
import 'animate.css';

export default function FeaturedProducts() {
    const containerRef = useRef(null);

    const products = [
        {
            title: 'Serum Brightening',
            description: 'Helps reduce dark spots and brighten skin naturally.',
            price: 'Rp120.000',
            image: Product1
        },
        {
            title: 'Moisturizer Hydrating',
            description: 'Keeps skin moisturized all day with a lightweight formula.',
            price: 'Rp95.000',
            image: Product2
        },
        {
            title: 'SPF Sunscreen 50+',
            description: 'Protects your skin from harmful UV rays and pollution.',
            price: 'Rp110.000',
            image: Product3
        },
        {
            title: 'Lip Balm Natural Tint',
            description: 'Moisturizing lip balm with a soft natural color.',
            price: 'Rp45.000',
            image: Product4
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                    entry.target.classList.remove('opacity-0');
                }
            });
        }, {
            threshold: 0.2
        });

        const cards = containerRef.current?.querySelectorAll('.product-card');
        cards?.forEach(card => observer.observe(card));

        return () => {
            cards?.forEach(card => observer.unobserve(card));
        };
    }, []);

    return (
        <section
            id="featured"
            className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 w-full py-20 px-6 text-gray-900 flex flex-col items-center"
        >
            <div className="max-w-7xl w-full flex flex-col items-center">
                <h2 className="text-4xl font-extrabold text-center mb-10 text-purple-900 drop-shadow-md">
                    Featured Products
                </h2>

                <div
                    ref={containerRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
                >
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="product-card opacity-0 bg-white rounded-xl shadow-lg p-6 text-center transition duration-300 hover:shadow-2xl hover:-translate-y-1"
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
}
