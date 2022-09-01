import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

import { auth } from '../services/auth/firebaseAuth';

const ProtectedComponent = ({ children, mustLogin = true }) => {
	const [user, isLoading] = useAuthState(auth);

	if (user && !mustLogin) {
		return <Navigate to='/' replace={true} />;
	}

	if (!user && mustLogin) {
		return <Navigate to='/login' />;
	}

	return isLoading ? <div>Loading....</div> : children;
};

export default ProtectedComponent;
