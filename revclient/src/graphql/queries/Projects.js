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
			duration
			difficulty
			startDate
			featuredImage
			donations {
				id
				amount
			}
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



export const GET_MY_PROJECTS = gql`
	query myProject {
		myProject {
			id
			name
			description
			address
			state
			zip
			city
			goalAmount
			amountFunded
			duration
			difficulty
			startDate
			featuredImage
			donations {
				id
				amount
			}

		}
	}
`;


