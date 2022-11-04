import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    //using query parameter to load specific user details
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('smart-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete this order');
        if (proceed) {
            fetch(`https://smart-car-server.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Data deleted successfully');
                        const remained = orders.filter(odr => odr._id !== id);
                        setOrders(remained);
                    }

                })

        }
    }

    const handleStatusUpdate = id => {
        fetch(`https://smart-car-server.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: "Approved" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remained = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id);
                    approving.status = 'Approved';
                    const newOrders = [approving, ...remained];
                    setOrders(newOrders);
                }
            })
    }


    return (
        <div>
            <p>total orders : {orders?.length}</p>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            >
                            </OrderRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Orders;