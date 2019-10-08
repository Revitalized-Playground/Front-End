import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { StripeProvider, Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm/CheckoutForm';

const ProjectDonationPage = props => {
	return (
		<StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}>
			<Elements>
				<CheckoutForm />
			</Elements>
		</StripeProvider>
	);
};

export default withRouter(ProjectDonationPage);
