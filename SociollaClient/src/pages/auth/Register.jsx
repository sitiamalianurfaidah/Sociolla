import React, { useState } from 'react';
import { signUpUser } from '../../actions/Auth.actions';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Menambahkan balance dan created_at secara manual
        const formData = {
            ...form,
            balance: 0,  // Set default balance
            created_at: new Date().toISOString(),  // Set default created_at
        };

        const res = await signUpUser(formData);  // Kirim data lengkap ke backend
        if (res?.success) {
            alert('Registrasi berhasil!');
            navigate('/user/login');
        } else {
            alert(res?.message || 'Registrasi gagal');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-300 flex justify-center items-center">
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg w-full sm:w-[400px]">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Register</h2>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                    <div className="flex flex-col">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                        />
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
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
                            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Already have an account?{' '}
                    <a href="/user/login" className="text-blue-500 hover:underline">
                        Login here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
