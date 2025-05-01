import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar'; // Pastikan ini path yang benar
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar akan muncul di setiap halaman */}
      <AppRoutes />
    </BrowserRouter>
  );
}
