import React from 'react';
import { withRouter } from 'react-router-dom';

import { StripeProvider, Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm/CheckoutForm';

// import { useMutation } from '@apollo/react-hooks';
// import { DONATE_TO_PROJECT } from '../../../graphql/mutations';

const ProjectDonationPage = () => {
	return (
		<StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}>
			<Elements>
				<CheckoutForm />
			</Elements>
		</StripeProvider>
	);
};

export default withRouter(ProjectDonationPage);
