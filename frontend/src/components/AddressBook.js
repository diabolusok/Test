import React, { useState, useEffect } from 'react';
import axios from 'axios';
const AddressBook = ({ token }) => {
    const [addresses, setAddresses] = useState([]);
    const [newAddress, setNewAddress] = useState('');

    useEffect(() => {
        const fetchAddresses = async () => {
            const response = await axios.get('http://localhost:8000/api/addresses', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setAddresses(response.data);
        };

        fetchAddresses();
    }, [token]);

    const handleAddAddress = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/addresses', {
            address: newAddress
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setNewAddress('');
        // Fetch addresses again
        const response = await axios.get('http://localhost:8000/api/addresses', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setAddresses(response.data);
    };

    return (
        <div>
            <form onSubmit={handleAddAddress}>
                <input value={newAddress} onChange={(e) => setNewAddress(e.target.value)} placeholder="Enter new address" required />
                <button type="submit">Add Address</button>
            </form>
            <ul>
                {addresses.map(address => (
                    <li key={address.id}>{address.address}</li>
                ))}
            </ul>
        </div>
    );
};

export default AddressBook;