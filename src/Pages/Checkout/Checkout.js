import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const service = useLoaderData();
    const { title } = service;

    return (
        <div>
            <p>this is checkout page</p>
            <p>{title}</p>
        </div>
    );
};

export default Checkout;