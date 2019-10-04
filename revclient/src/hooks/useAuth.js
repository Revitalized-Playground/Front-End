import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import jwt from 'jsonwebtoken';

export const useAuth = history => {
	let [token, setStoken] = useState(localStorage.getItem('token'));

	try {
		jwt.verify(token, process.env.REACT_APP_JWT_SECRET);
	} catch (error) {
		localStorage.removeItem('token');
		return history.push('/login');
	}

	function logOut() {
		localStorage.removeItem('token');
	}

	return { logOut };
};
