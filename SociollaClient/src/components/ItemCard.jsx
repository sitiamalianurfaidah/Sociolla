import React from 'react';
import './ItemCard.css';

export default function ItemCard({ item }) {
    return (
        <div className="item-card">
        <img src={item.imageUrl} alt={item.name} className="item-card-image" />
        <div className="item-card-info">
            <h3 className="item-card-title">{item.name}</h3>
            <p className="item-card-price">{`$${item.price}`}</p>
            <button className="item-card-button">Add to Cart</button>
        </div>
        </div>
    );
}
