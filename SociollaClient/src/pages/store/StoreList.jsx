import React, { useEffect, useState } from 'react';
import { getAllStores } from '../../actions/Store.actions';
import StoreCard from '../../components/StoreCard';

const StoreList = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const fetchStores = async () => {
        const data = await getAllStores();
        if (data?.success) {
            setStores(data.payload);
        }
        };
        fetchStores();
    }, []);

    return (
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Daftar Store</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stores.map((store) => (
            <StoreCard key={store._id} store={store} />
            ))}
        </div>
        </div>
    );
};

export default StoreList;
