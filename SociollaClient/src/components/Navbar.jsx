import { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    const navItems = [
        { label: 'Home', to: '/' },
        { label: 'Stores', to: '/stores' },
        { label: 'Items', to: '/items' },
        { label: 'Transactions', to: '/transactions' },
        { label: 'Profile', to: '/profile' },
        { label: 'Top Up', to: '/topup' },
        { label: 'Login', to: '/user/login' },
        { label: 'Register', to: '/user/register' },
    ];

    return (
        <nav className="bg-white text-black shadow-md sticky top-0 z-50 px-6 py-4 font-Poppins">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Nav Items */}
                <div className="flex-1 flex justify-center">
                    <ul className="flex flex-wrap justify-center space-x-6 font-semibold text-sm md:text-base">
                        {navItems.map(item => (
                            <li key={item.label}>
                                <Link
                                    to={item.to}
                                    className="text-pink-600 hover:text-pink-800 transition-all duration-300 ease-in-out transform hover:scale-[1.05] hover:brightness-110"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-64">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search anything..."
                        className="bg-[#fef4f9] border border-pink-200 rounded-full pl-10 pr-4 py-2 text-sm w-full placeholder-pink-400 text-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-300 shadow-sm transition-all duration-200"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400 w-4 h-4" />
                </div>
            </div>
        </nav>
    );
}
