import Navbar from '../components/Navbar'; // Import Navbar
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import './Home.css';

export default function Home() {
    const handleSearch = (searchTerm) => {
        console.log('Search term:', searchTerm); // Implementasikan logika pencarian di sini
    };

    return (
        <div className="home">
            {/* Navbar */}
            <Navbar onSearch={handleSearch} />

            {/* Hero Section */}
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
