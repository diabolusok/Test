import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email,
                password
            });
            setToken(response.data.token);
            alert('Login successful!');
        } catch (error) {
            console.error(error.response.data);
            alert('Login failed!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;