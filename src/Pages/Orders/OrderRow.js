import React, { useEffect, useState } from 'react';

const OrderRow = ({ order }) => {
    const { serviceName, price, customer, phone, message, service, _id } = order;
    const [orderService, setOrderService] = useState()
    console.log(order);

    //we did this useEffect and fetched data from service collection and set to a state , because we need data(in this case img) to add info from service collection to add order page

    useEffect(() => {
        fetch(`https://smart-car-server.vercel.app/checkout/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete this order');
        if (proceed) {
            fetch(`https://smart-car-server.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                })

        }
    }

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline hover:bg-red-500 hover:border-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-24 h-24">
                            {orderService?.img && <img src={orderService?.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>Purple</td>
            <th>
                <button className="btn btn-ghost btn-xs">{message}</button>
            </th>
        </tr>
    );
};

export default OrderRow;