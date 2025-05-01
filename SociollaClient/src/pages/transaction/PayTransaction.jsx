import React, { useEffect, useState } from 'react';
import { getTransactionById, payTransaction } from '../../actions/Transaction.actions';
import { useParams, useNavigate } from 'react-router-dom';

const PayTransaction = () => {
    const { id } = useParams();
    const [transaction, setTransaction] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTransaction = async () => {
        const result = await getTransactionById(id);
        if (result?.success) {
            setTransaction(result.payload);
        }
        };
        fetchTransaction();
    }, [id]);

    const handlePay = async () => {
        const result = await payTransaction(id);
        if (result?.success) {
        navigate('/transactions');
        }
    };

    if (!transaction) return <p>Loading...</p>;

    return (
        <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Pembayaran</h1>
        <p><strong>Item:</strong> {transaction.item.name}</p>
        <p><strong>Jumlah:</strong> {transaction.quantity}</p>
        <p><strong>Total:</strong> Rp {transaction.totalPrice}</p>
        <p><strong>Status:</strong> {transaction.status}</p>
        <button
            onClick={handlePay}
            className="bg-green-600 text-white px-4 py-2 rounded mt-4"
            disabled={transaction.status === 'PAID'}
        >
            {transaction.status === 'PAID' ? 'Sudah Dibayar' : 'Bayar Sekarang'}
        </button>
        </div>
    );
};

export default PayTransaction;
