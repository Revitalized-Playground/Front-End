import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { injectStripe, CardElement, CardNumberElement, CardExpiryElement, CardCvcElement } from 'react-stripe-elements';

import { useMutation } from '@apollo/react-hooks';
import { DONATE_TO_PROJECT } from '../../../graphql/mutations';

const CheckoutForm = ({ stripe, match }) => {
	const [amount, setAmount] = useState(0);
	const [donateToProject] = useMutation(DONATE_TO_PROJECT);

	async function handleSubmit(e) {
		e.preventDefault();
		const { token } = await stripe.createToken({ name: 'Name here' });


		donateToProject({
			variables: {
				id: match.params.id,
				data: {
					token: token.id,
					amount: parseInt(amount, 10),
				},
			},
		});
	}

	return (
		<form onSubmit={handleSubmit}>
			<span>Amount: {amount}</span>
			<input type="number" name="amount" value={amount} onChange={e => setAmount(e.target.value)} />
			<CardNumberElement />
			<CardExpiryElement />
			<CardCvcElement />
			<button>Confirm order</button>
		</form>
	);
};

export default withRouter(injectStripe(CheckoutForm));
