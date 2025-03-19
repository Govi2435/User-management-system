import React from 'react';
import { Link } from 'react-router-dom';
import UserService from '../service/UserService';

function Navbar() {
    const isAuthenticated = UserService.isAuthenticated();
    const isAdmin = UserService.isAdmin();

    const handleLogout = () => {
        const confirmDelete = window.confirm('Are you sure you want to logout?');
        if (confirmDelete) {
            UserService.logout();
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">KEEPINBOX</Link>
                <ul className="navbar-menu">
                    {!isAuthenticated && (
                        <li className="navbar-item">
                            <Link to="/" className="navbar-link">Home</Link>
                        </li>
                    )}
                    {isAuthenticated && (
                        <li className="navbar-item">
                            <Link to="/profile" className="navbar-link">Profile</Link>
                        </li>
                    )}
                    {isAdmin && (
                        <li className="navbar-item">
                            <Link to="/admin/user-management" className="navbar-link">User Management</Link>
                        </li>
                    )}
                    {isAuthenticated && (
                        <li className="navbar-item">
                            <Link to="/" onClick={handleLogout} className="navbar-link">Logout</Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;