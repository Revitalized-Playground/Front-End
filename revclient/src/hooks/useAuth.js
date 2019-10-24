import { useState } from 'react';
import jwt from 'jsonwebtoken';

export const useAuth = history => {
	let [token, setStoken] = useState(localStorage.getItem('token'));

	function authenticateUser() {
		try {
			jwt.verify(token, process.env.REACT_APP_JWT_SECRET);
		} catch (error) {
			localStorage.removeItem('token');
			return history.push('/login');
		}
	}

	function currentUser() {
		if (token) {
			authenticateUser();
			return jwt.decode(token, token, process.env.REACT_APP_JWT_SECRET);
		} else {
			return false;
		}
	}

	function logOut() {
		localStorage.removeItem('token');
	}

	return { currentUser, authenticateUser, logOut };
};
