import React from 'react';
import './TransactionCard.css';

export default function TransactionCard({ transaction }) {
    return (
        <div className="transaction-card">
        <div className="transaction-card-header">
            <h3 className="transaction-card-title">Transaction #{transaction.id}</h3>
            <p className="transaction-card-status">{transaction.status}</p>
        </div>
        <div className="transaction-card-details">
            <p className="transaction-card-date">{transaction.date}</p>
            <p className="transaction-card-total">{`Total: $${transaction.total}`}</p>
        </div>
        <button className="transaction-card-button">View Details</button>
        </div>
    );
}
