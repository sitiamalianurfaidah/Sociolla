import React, { useState } from 'react';
import { loginUser } from '../../actions/auth.actions';
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
        localStorage.setItem('user', JSON.stringify(res.payload));
        navigate('/'); // ke home
        } else {
        alert(res?.message || 'Login gagal');
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
            <button type="submit" className="bg-blue-500 text-white py-2">Login</button>
        </form>
        </div>
    );
};

export default Login;
