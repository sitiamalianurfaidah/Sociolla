import React, { useEffect, useState } from 'react';
import { getAllTransactions } from '../../actions/Transaction.actions';
import { Link } from 'react-router-dom';

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
        const result = await getAllTransactions();
        if (result?.success) {
            setTransactions(result.payload);
        }
        };
        fetchTransactions();
    }, []);

    return (
        <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Daftar Transaksi</h1>
        <div className="space-y-4">
            {transactions.map((trx) => (
            <div key={trx._id} className="border p-4 rounded">
                <p><strong>Item:</strong> {trx.item?.name}</p>
                <p><strong>Jumlah:</strong> {trx.quantity}</p>
                <p><strong>Total:</strong> Rp {trx.totalPrice}</p>
                <p><strong>Status:</strong> {trx.status}</p>
                <Link to={`/transactions/pay/${trx._id}`} className="text-blue-500 underline mt-2 inline-block">
                Bayar
                </Link>
            </div>
            ))}
        </div>
        </div>
    );
};

export default TransactionList;
