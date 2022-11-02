import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import OrderRow from './OrderRow';

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
            {/* <p>total orders : {orders?.length}</p> */}
            {
                !orders?.length && <p>loading..</p>
            }
            {orders?.length && <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow key={order._id} order={order}></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>

            }
        </div>
    );
};

export default Orders;