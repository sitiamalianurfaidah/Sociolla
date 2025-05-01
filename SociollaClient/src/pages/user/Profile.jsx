import React, { useEffect, useState } from 'react';
import { getUser } from '../../actions/User.actions';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
        const result = await getUser();
        if (result?.success) {
            setUser(result.payload);
        }
        };
        fetchUser();
    }, []);

    if (!user) return <p>Loading...</p>;

    return (
        <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Profil Saya</h1>
        <p><strong>Nama:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Balance:</strong> Rp {user.balance}</p>
        </div>
    );
};

export default Profile;
