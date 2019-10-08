import gql from 'graphql-tag';

export const GET_PROJECTS = gql`
	query projects {
		projects {
			id
			name
			description
			address
			state
			zip
			city
			goalAmount
			amountFunded
		}
	}
`;

export const GET_PROJECT = gql`
	query project($id: ID!) {
		project(id: $id) {
			id
			name
			startDate
			description
			address
			state
			zip
			city
			goalAmount
			amountFunded
			featuredImage
			difficulty
			duration
			donations {
				id
				amount
			}
			comments {
				id
				comment
				profile {
					id
					profileImage
					firstName
					lastName
				}
			}
			profile {
				id
				profileImage
				firstName
				lastName
				email
				state
				city
			}
			images {
				id
				imageUrl
			}
		}
	}
`;
