import React from 'react';
import './StoreCard.css';

export default function StoreCard({ store }) {
    return (
        <div className="store-card">
        <img src={store.imageUrl} alt={store.name} className="store-card-image" />
        <div className="store-card-info">
            <h3 className="store-card-name">{store.name}</h3>
            <p className="store-card-description">{store.description}</p>
            <button className="store-card-button">Visit Store</button>
        </div>
        </div>
    );
}
