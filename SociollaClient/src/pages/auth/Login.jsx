import React, { useState } from 'react';
import { loginUser } from '../../actions/Auth.actions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await loginUser(form); // Kirim ke backend
        if (res?.success) {
            // Simpan data user di localStorage
            localStorage.setItem('user', JSON.stringify(res.payload));
            // Arahkan ke halaman Home setelah login berhasil
            navigate('/'); // ke home
        } else {
            alert(res?.message || 'Login gagal');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-200 to-pink-300 flex justify-center items-center">
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg w-full sm:w-[400px]">
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Login</h2>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                    <div className="flex flex-col">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            value={form.email} 
                            onChange={handleChange} 
                            required 
                            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                        />
                    </div>
                    <div className="flex flex-col">
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            value={form.password} 
                            onChange={handleChange} 
                            required 
                            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all duration-300"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Don't have an account?{' '}
                    <a href="/user/register" className="text-purple-500 hover:underline">
                        Register here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
