import { useState } from 'react';
import Navbar from '../components/Navbar';
import FeaturedProducts from '../components/FeaturedProducts'; // Contoh komponen untuk produk unggulan
import Categories from '../components/Categories'; // Komponen kategori produk
import Footer from '../components/Footer';
import './Home.css';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="home">
        <Navbar onSearch={setSearchTerm} />

        {/* Hero Section - Tampilan Banner */}
        <section id="hero" className="hero-section">
            <div className="hero-content">
            <h1>Welcome to Sociolla</h1>
            <p>Your Beauty & Health Hub</p>
            <button className="cta-btn">Shop Now</button>
            </div>
        </section>

        {/* Featured Products */}
        <section id="featured-products">
            <FeaturedProducts />
        </section>

        {/* Product Categories */}
        <section id="categories">
            <Categories />
        </section>

        {/* Footer Section */}
        <Footer />
        </div>
    );
}
