import React from 'react';
import profilePic from '../../assets/profile-pic.jpg';

const Profile = () => {
    const user = {
        name: 'Siti Amalia Nurfaidah',
        email: 'sitiamalia@email.com',
        balance: 5000000, // Adjust this based on your actual balance
        profilePicture: profilePic, // Replace this with your actual profile image URL
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-200 to-pink-300 flex justify-center items-center py-8">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full space-y-6">
                <div className="flex justify-center">
                    <img
                        src={user.profilePicture || '/default-profile.png'} // Fallback to default if no image
                        alt="Profile"
                        className="w-32 h-32 rounded-full border-4 border-pink-500"
                    />
                </div>
                <h1 className="text-3xl font-bold text-center text-purple-700">{user.name}</h1>
                <div className="text-center text-gray-600">
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Balance:</strong> Rp {user.balance}</p>
                </div>
                <div className="flex justify-center gap-6 mt-6">
                    <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300">
                        Edit Profile
                    </button>
                    <button className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all duration-300">
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
