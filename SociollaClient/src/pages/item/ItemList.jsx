import React, { useEffect, useState } from 'react';
import { getItemsByStoreId } from '../../actions/Item.actions';
import ItemCard from '../../components/ItemCard';
import { useParams } from 'react-router-dom';

const ItemList = () => {
    const { storeId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
        const result = await getItemsByStoreId(storeId);
        if (result?.success) {
            setItems(result.payload);
        }
        };
        fetchItems();
    }, [storeId]);

    return (
        <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Item di Store {storeId}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {items.map((item) => (
            <ItemCard key={item._id} item={item} />
            ))}
        </div>
        </div>
    );
};

export default ItemList;
