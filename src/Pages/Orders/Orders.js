import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState({});
    
    //using query parameter to load specific user details
    useEffect(() => {
        fetch(`https://smart-car-server.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])
    return (
        <div>
            <p>total orders : {orders.length}</p>
        </div>
    );
};

export default Orders;