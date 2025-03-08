import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GetUser = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/users");
            const data = await response.json();
            if (response.ok) {
                setUsers(data.data);
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const deleteUser = async (userId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/delete/${userId}`, { method: "DELETE" });
            if (response.ok) {
                setMessage("User deleted successfully.");
                fetchUsers();
            } else {
                setMessage("Failed to delete user.");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            {message && <p>{message}</p>}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.uname}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => navigate(`/update/${user._id}`)}>Update</button>
                                <button onClick={() => deleteUser(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GetUser;
