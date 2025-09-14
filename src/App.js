import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import WelcomePage from './pages/WelcomePage';
import TodoPage from './pages/TodoPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css';

// Create a parent layout component
const MainLayout = () => (
    <>
        <Navbar />
        <main>
            <Outlet />
        </main>
    </>
);

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<WelcomePage />} />
                    <Route path="todos" element={<TodoPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="contact" element={<ContactPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
