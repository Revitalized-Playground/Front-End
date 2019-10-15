import React from 'react';

import { Routes } from './Routes';

import { useQuery } from '@apollo/react-hooks';
import { IP } from './graphql/queries';

const App = () => {
	const { data } = useQuery(IP);
	console.log(data);

	return <Routes />;
};

export default App;
