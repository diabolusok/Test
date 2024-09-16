import './App.css';
import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import AddressBook from './components/AddressBook';

const App = () => {
    const [token, setToken] = useState('');

    return (
        <div>
            {!token ? (
                <>
                    <h1>Register</h1>
                    <Register />
                    <h1>Login</h1>
                    <Login setToken={setToken} />
                </>
            ) : (
                <AddressBook token={token} />
            )}
        </div>
    );
};

export default App;