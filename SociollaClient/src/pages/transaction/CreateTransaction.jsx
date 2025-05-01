import React, { useState, useEffect } from 'react';
import { createTransaction } from '../../actions/Transaction.actions';
import { getItemById } from '../../actions/Item.actions';
import { useParams, useNavigate } from 'react-router-dom';

const CreateTransaction = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItem = async () => {
        const result = await getItemById(itemId);
        if (result?.success) {
            setItem(result.payload);
        }
        };
        fetchItem();
    }, [itemId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
        itemId,
        quantity,
        };

        const result = await createTransaction(payload);
        if (result?.success) {
        navigate(`/transactions`);
        }
    };

    if (!item) return <p>Loading item...</p>;

    return (
        <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Buat Transaksi</h1>
        <p>Item: {item.name}</p>
        <p>Harga: Rp {item.price}</p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border p-2 w-full"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Buat Transaksi
            </button>
        </form>
        </div>
    );
};

export default CreateTransaction;
