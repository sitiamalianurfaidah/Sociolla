import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Profile from '../pages/user/Profile';
import Setting from '../pages/user/Setting';
import StoreList from '../pages/store/StoreList';
import StoreDetail from '../pages/store/StoreDetail';
import ItemList from '../pages/item/ItemList';
import ItemDetail from '../pages/item/ItemDetail';
import TransactionList from '../pages/transaction/TransactionList';

export default function AppRoutes() {
    return (
        <Routes>
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />

        {/* Store */}
        <Route path="/stores" element={<StoreList />} />
        <Route path="/stores/:id" element={<StoreDetail />} />

        {/* Item */}
        <Route path="/items" element={<ItemList />} />
        <Route path="/items/:id" element={<ItemDetail />} />

        {/* Transaction */}
        <Route path="/transactions" element={<TransactionList />} />
        </Routes>
    );
}
