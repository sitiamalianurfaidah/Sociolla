import { useRef } from 'react'; // Import useRef
import Navbar from '../components/Navbar';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

export default function Home() {
    const featuredProductsRef = useRef(null); // Buat ref untuk Featured Products

    const handleSearch = (searchTerm) => {
        console.log('Search term:', searchTerm);
    };

    const scrollToFeaturedProducts = () => {
        if (featuredProductsRef.current) {
            featuredProductsRef.current.scrollIntoView({
                behavior: 'smooth', // Smooth scroll
                block: 'start', // Posisikan scroll di atas
            });
        }
    };

    return (
        <div className="home font-sans text-purple-900">
            {/* Navbar */}
            <Navbar onSearch={handleSearch} />

            {/* Hero Section */}
            <section
                id="hero"
                className="w-full h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-300 text-center flex flex-col justify-center items-center animate__animated animate__fadeIn"
            >
                <div className="px-6 max-w-2xl">
                    <h1 className="text-5xl font-extrabold drop-shadow-lg mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                        Welcome to Sociolla
                    </h1>
                    <p className="text-lg mb-6 animate__animated animate__fadeInUp animate__delay-2s">
                        Your Beauty & Health Hub
                    </p>
                    <button
                        className="bg-purple-800 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-pink-400 transition duration-300 animate__animated animate__zoomIn animate__delay-3s"
                        onClick={scrollToFeaturedProducts} // Tambahkan onClick untuk scroll
                    >
                        Shop Now
                    </button>
                </div>
            </section>

            {/* Featured Products */}
            <section
                id="featured-products"
                ref={featuredProductsRef} // Menambahkan ref pada bagian Featured Products
                className="py-12 px-4 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 animate__animated animate__fadeIn"
            >
                <FeaturedProducts />
            </section>

            {/* Product Categories */}
            <section
                id="categories"
                className="py-12 px-4 bg-gradient-to-br from-pink-100 via-indigo-100 to-purple-100 animate__animated animate__fadeIn animate__delay-1s"
            >
                <Categories />
            </section>

            {/* Footer Section */}
            <Footer />
        </div>
    );
}
