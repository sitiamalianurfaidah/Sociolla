import React, { useEffect, useState } from 'react';
import { getStoreById } from '../../actions/Store.actions';
import { useParams } from 'react-router-dom';

const StoreDetail = () => {
    const { id } = useParams();
    const [store, setStore] = useState(null);

    useEffect(() => {
        const fetchStore = async () => {
        const result = await getStoreById(id);
        if (result?.success) {
            setStore(result.payload);
        }
        };
        fetchStore();
    }, [id]);

    if (!store) return <p>Loading...</p>;

    return (
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">Detail Store</h1>
        <p><strong>ID:</strong> {store._id}</p>
        <p><strong>Nama:</strong> {store.name}</p>
        </div>
    );
};

export default StoreDetail;
