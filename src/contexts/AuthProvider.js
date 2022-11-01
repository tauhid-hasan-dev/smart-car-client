import React, { createContext } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const user = { name: 'tauhid' }
    const value = { user }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider; 