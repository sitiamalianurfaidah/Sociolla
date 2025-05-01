import React, { useState } from 'react';
import { signUpUser } from '../../actions/auth.actions';
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
        <div className="p-4 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Register</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="bg-green-500 text-white py-2">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
