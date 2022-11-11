import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true);
    const [search, setSearch] = useState('')
    const searchRef = useRef();
    //console.log(isAsc);
    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}&order=${isAsc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAsc, search]) //dependency is very important here

    // console.log(services);

    const handleSearch = () => {
        setSearch(searchRef.current.value)
    }



    return (
        <div className='mb-10'>
            <div className='text-center flex flex-col gap-2 mb-10'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <p className="text-5xl font-semibold">Our Service Area</p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='flex justify-center py-5 gap-3'>
                <input ref={searchRef} type="text" placeholder="Search Service" className="input input-bordered input-sm w-full max-w-xs" />
                <button onClick={() => handleSearch()} className="btn btn-sm btn-active btn-primary">Search</button>
            </div>
            <div className='flex justify-center py-5'>
                <button onClick={() => setIsAsc(!isAsc)} className='btn btn-success'>{isAsc ? 'Low to high' : 'High to low'}</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' >
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;