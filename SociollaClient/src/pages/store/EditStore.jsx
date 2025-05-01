import React, { useEffect, useState } from 'react';
import { getStore, updateStore } from '../../actions/Store.actions';
import { useNavigate, useParams } from 'react-router-dom';

const EditStore = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStore = async () => {
        const result = await getStore(id);
        if (result?.success) {
            setName(result.payload.name);
        }
        };
        fetchStore();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const result = await updateStore({ id, name });
        if (result?.success) {
        navigate('/stores');
        }
    };

    return (
        <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Edit Store</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
            <input
            type="text"
            placeholder="Nama Store"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full"
            />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Update
            </button>
        </form>
        </div>
    );
};

export default EditStore;
