import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../service/UserService';

function UserManagementPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await UserService.getAllUsers(token);
            setUsers(response.ourUsersList);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const deleteUser = async (userId) => {
        try {
            const confirmDelete = window.confirm('Are you sure you want to delete this user?');
            const token = localStorage.getItem('token');
            if (confirmDelete) {
                await UserService.deleteUser(userId, token);
                fetchUsers();
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="user-management-container">
            <h2 className="user-management-title">User Management</h2>
            <Link to="/register" className="add-user-button">Add User</Link>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
                                <Link to={`/update-user/${user.id}`} className="update-button">Update</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserManagementPage;