import React, { useState } from 'react';
import Login from './Login';  // Pastikan path ini benar
import Register from './Register';  // Pastikan path ini benar

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);  // Toggle antara login dan register
    };

    return (
        <div className="auth-container flex justify-center items-center min-h-screen bg-gray-100">
            <div className="auth-box bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="tabs mb-4">
                    <button
                        onClick={toggleForm}
                        className={`tab-btn ${isLogin ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                    >
                        Login
                    </button>
                    <button
                        onClick={toggleForm}
                        className={`tab-btn ${!isLogin ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                    >
                        Register
                    </button>
                </div>
                {isLogin ? <Login /> : <Register />}
            </div>
        </div>
    );
};

export default AuthPage;
