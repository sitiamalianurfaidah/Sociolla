import React, { useEffect, useState } from 'react';
import { getItemById } from '../../actions/Item.actions';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
        const result = await getItemById(id);
        if (result?.success) {
            setItem(result.payload);
        }
        };
        fetchItem();
    }, [id]);

    if (!item) return <p>Loading...</p>;

    return (
        <div className="p-4">
        <h1 className="text-2xl font-bold">{item.name}</h1>
        <img src={item.imageUrl} alt={item.name} className="w-64 my-4" />
        <p><strong>Harga:</strong> Rp {item.price}</p>
        <p><strong>Stok:</strong> {item.stock}</p>
        <p><strong>Store ID:</strong> {item.storeId}</p>
        </div>
    );
};

export default ItemDetail;
