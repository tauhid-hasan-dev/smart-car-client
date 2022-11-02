import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Checkout = () => {
    const service = useLoaderData();
    const { title } = service;
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered'
        const phone = form.phone.value;
        const message = form.message.value;

        console.log(name, email, phone, message);
    }

    return (
        <div className='pb-10'>
            <p className='text-4xl font-bold text-center mb-5'>You are about to checkout for {title}</p>
            <form onSubmit={handlePlaceOrder} className='p-10 rounded-2xl bg-orange-50 flex flex-col gap-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5  '>
                    <input name='firstName' type="text" placeholder="Your First Name" className="input input-bordered input-error w-full" />
                    <input name='lastName' type="text" placeholder="Your Last Name" className="input input-bordered input-error w-full" />
                    <input name='email' type="email" placeholder="Your Email" className="input input-bordered input-error w-full" defaultValue={user?.email} readOnly />
                    <input name='phone' type="text" placeholder="Password" className="input input-bordered input-error w-full" />
                </div>
                <textarea name='message' className="textarea textarea-error w-full" placeholder="Your message"></textarea>
                <input className='bg-orange-500 p-3 text-white font-bold cursor-pointer text-2xl rounded-lg hover:bg-orange-600' type="submit" value="Order Confirm" />
            </form>
        </div>
    );
};

export default Checkout;