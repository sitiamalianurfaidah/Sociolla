import React, { useState } from 'react';
import { createStore } from '../../actions/Store.actions';
import { useNavigate } from 'react-router-dom';

const CreateStore = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await createStore({ name });
        if (result?.success) {
        navigate('/stores');
        }
    };

    return (
        <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Tambah Store Baru</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
            type="text"
            placeholder="Nama Store"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Simpan
            </button>
        </form>
        </div>
    );
};

export default CreateStore;
