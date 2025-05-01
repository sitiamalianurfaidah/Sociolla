import React, { useState } from 'react';
import { topUpBalance, deleteUser } from '../../actions/User.actions';
import { useNavigate } from 'react-router-dom';

const Setting = () => {
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();

    const handleTopUp = async () => {
        const result = await topUpBalance({ amount: Number(amount) });
        if (result?.success) {
        alert('Top up berhasil!');
        }
    };

    const handleDelete = async () => {
        const confirm = window.confirm('Yakin ingin hapus akun?');
        if (!confirm) return;

        const result = await deleteUser();
        if (result?.success) {
        alert('Akun dihapus.');
        navigate('/login');
        }
    };

    return (
        <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Pengaturan</h1>

        <div className="space-y-2 mb-6">
            <h2 className="font-semibold">Top Up Balance</h2>
            <input
            type="number"
            placeholder="Masukkan nominal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 w-full"
            />
            <button onClick={handleTopUp} className="bg-green-600 text-white px-4 py-2 rounded">
            Top Up
            </button>
        </div>

        <div className="space-y-2">
            <h2 className="font-semibold">Hapus Akun</h2>
            <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded">
            Hapus Akun Saya
            </button>
        </div>
        </div>
    );
};

export default Setting;
