import React from 'react';
import StudentCTA from './StudentCTA/StudentCTA';
import TrendingTrades from './TrendingTrades/TrendingTrades';

const CTAPlusTrades = () => {
	return (
		<div className="student-cta-trending">
			<StudentCTA />
			<TrendingTrades />
		</div>
	);
};

export default CTAPlusTrades;
