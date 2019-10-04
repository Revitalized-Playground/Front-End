import { useState } from 'react';
import jwt from 'jsonwebtoken';

export const useAuth = history => {

    let [token, setStoken] = useState(localStorage.getItem('token'));

    try {
        jwt.verify(token, process.env.REACT_APP_JWT_SECRET);
    } catch (error) {
        localStorage.removeItem('token');
        return history.push('/login');
    }

    function currentUser() {
        return jwt.decode(token, process.env.REACT_APP_JWT_SECRET);
    }

    function logOut() {
        localStorage.removeItem('token');
    }

    return { currentUser, logOut };
};