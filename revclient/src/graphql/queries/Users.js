import gql from 'graphql-tag';

export const GET_USERS = gql`
	{
		users {
			id
			password
			email
			firstName
		}
	}
`;
export const GET_USER = gql`
	query me {
		me {
			email
			firstName
			lastName
			profileImage
			city
			zip
			address
			state
			aptNumber
		}
	}
`;

export const GET_USER_PROFILE = gql`
	query me {
		me {
			id
			email
			firstName
			lastName
			profileImage
			city
			zip
			address
			state
			aptNumber
			donations {
				id
				amount
			}

            # This is an array with items if the user has created a project
			projects {
				id
				name
				description
				address
				state
				zip
				city
				goalAmount
				duration
				difficulty
				startDate
				featuredImage
				images {
					id
					imageUrl
				}
				donations {
					id
					amount
				}
				likes {
					id
				}
				comments {
					id
					comment
				}
				applicants {
					id
					status
				}
				tradeMasters {
					id
				}
				students {
					id
				}
				tasks {
					id
					description
					priority
					dueDate
					budgetHours
				}
			}
			likedProjects {
				id
				project {
					id
					name
				}
			}

            # This is an array with items if the user has left comments
			comments {
				id
				comment
				likes {
					id
				}
				project {
					id
					name
					featuredImage
				}
			}

            # This is an array with items if the user has liked comments
			likedComments {
				id
				comment {
					id
					comment
					profile {
						id
						firstName
						profileImage
					}
					project {
						id
						name
						featuredImage
					}
				}
			}

            # This is an array with items if the user is a student
			studentProjects {
				id
				project {
					id
					name
				}
			}

            # This is an array with items if the user has tasks
			tasks {
				id
				projectTask {
					id
					trade {
						id
						name
						description
					}
					description
					priority
					dueDate
					budgetHours
					apprentices {
						id
					}
				}
			}

            # This is an array with items if the user has submitted an application to join a project
			applications {
				id
				coverLetter
				status
				project {
					id
					name
				}
				trade {
					id
					name
					description
				}
			}

            # This is an array with items if the user is a trades master
			tradeMasterProjects {
				id
				project {
					id
					name
				}
			}
		}
	}
`;
