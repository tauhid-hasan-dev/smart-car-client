import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <p className='text-5xl'>loading.....</p>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;