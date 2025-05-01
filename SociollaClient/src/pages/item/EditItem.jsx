import React, { useEffect, useState } from 'react';
import { getItemById, updateItem } from '../../actions/Item.actions';
import { useNavigate, useParams } from 'react-router-dom';

const EditItem = () => {
    const { id } = useParams();
    const [form, setForm] = useState({
        name: '',
        price: '',
        stock: '',
        image: null,
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItem = async () => {
        const result = await getItemById(id);
        if (result?.success) {
            const { name, price, stock } = result.payload;
            setForm({ name, price, stock, image: null });
        }
        };
        fetchItem();
    }, [id]);

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
        formData.append('id', id);
        formData.append('name', form.name);
        formData.append('price', form.price);
        formData.append('stock', form.stock);
        if (form.image) formData.append('image', form.image);

        const result = await updateItem(formData);
        if (result?.success) {
        navigate(-1); // balik ke halaman sebelumnya
        }
    };

    return (
        <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Edit Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Nama Item" className="border p-2 w-full" />
            <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Harga" className="border p-2 w-full" />
            <input type="number" name="stock" value={form.stock} onChange={handleChange} placeholder="Stok" className="border p-2 w-full" />
            <input type="file" name="image" onChange={handleChange} className="border p-2 w-full" />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Update</button>
        </form>
        </div>
    );
};

export default EditItem;
