import React, { useState } from 'react';
import { createItem } from '../../actions/Item.actions';
import { useNavigate, useParams } from 'react-router-dom';

const CreateItem = () => {
    const { storeId } = useParams();
    const [form, setForm] = useState({
        name: '',
        price: '',
        stock: '',
        image: null,
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm((prev) => ({
        ...prev,
        [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('storeId', storeId);
        formData.append('name', form.name);
        formData.append('price', form.price);
        formData.append('stock', form.stock);
        if (form.image) formData.append('image', form.image);

        const result = await createItem(formData);
        if (result?.success) {
        navigate(`/items/${storeId}`);
        }
    };

    return (
        <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Tambah Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Nama Item" onChange={handleChange} className="border p-2 w-full" />
            <input type="number" name="price" placeholder="Harga" onChange={handleChange} className="border p-2 w-full" />
            <input type="number" name="stock" placeholder="Stok" onChange={handleChange} className="border p-2 w-full" />
            <input type="file" name="image" accept="image/*" onChange={handleChange} className="border p-2 w-full" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Simpan</button>
        </form>
        </div>
    );
};

export default CreateItem;
