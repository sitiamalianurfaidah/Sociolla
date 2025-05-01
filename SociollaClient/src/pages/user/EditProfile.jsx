import React, { useEffect, useState } from 'react';
import { getUser, updateUser } from '../../actions/User.actions';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const [user, setUser] = useState({ name: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
        const result = await getUser();
        if (result?.success) {
            setUser(result.payload);
        }
        };
        fetchUser();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await updateUser({ name: user.name });
        if (result?.success) {
        navigate('/profile');
        }
    };

    return (
        <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Edit Profil</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="border p-2 w-full"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Simpan Perubahan
            </button>
        </form>
        </div>
    );
};

export default EditProfile;
