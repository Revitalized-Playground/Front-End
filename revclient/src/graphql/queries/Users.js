import gql from 'graphql-tag';
import {
	USER_SUMMARY_FRAG,
	PROJECT_SUMMARY_FRAG,
	COMMENTS_FRAG,

} from '../fragments';

export const GET_USERS = gql`
	{
		users {
			...UserSummary
		}
	}
	${USER_SUMMARY_FRAG}
`;


export const GET_USER = gql`
	query me {
		me {
			...UserSummary
		}
	}
	${USER_SUMMARY_FRAG}
`;




export const GET_USER_PROFILE = gql`
	query me {
		me {
			...UserSummary
			donations {
				id
				amount
				project {
					...ProjectSummary
				}
				# profile {
				# 	...UserSummary
				# }
        	}
			# This is an array with items if the user has created a project
			projects {
				...ProjectSummary
				applicants {
					id
					licensed
					coverLetter
					jobExperience
					education
					availability
					status
					trade {
						id
						name
						description
					}
					profile {
						...UserSummary
					}
				}
			}
			# Projects the user has liked
			likedProjects {
				id
				project {
					id
					name
					featuredImage
				}
			}
			# This is an array with items if the user has left comments
			# comments {
			# 	...Comments
			# 	project {
			# 		id
			# 		students {
			# 			id
			# 			profile {
			# 				id
			# 				profileImage
			# 			}
			# 		}
			# 	}
			# }
			# This is an array with items if the user has liked comments
			# likedComments {
			# 	id
			# 	comment {
			# 		...Comments
			# 		profile {
			# 			...UserSummary
			# 		}
			# 		project {
			# 			...ProjectSummary
			# 		}
			# 	}
			# }
			# This is an array with items if the user has submitted an application to join a project
			applications {
				id
				project {
					...ProjectSummary
				}
				trade {
					id
					name
					description
				}
				coverLetter
				status
			}
			# This is an array with items if the user is a student
			studentProjects {
				id
				project {
					...ProjectSummary
				}
			}
			# This is an array with items if the user has tasks
			tasks {
				id
				projectTask {
					id
					title
					description
					budgetHours
					dueDate
					priority
					apprentices {
						id
						profile {
							...UserSummary
						}
					}
					project {
						...ProjectSummary
					}
					trade {
						id
						name
						description
					}
				}
				profile {
					...UserSummary
				}
			}
			# This is an array with items if the user is a trades master
			tradeMasterProjects {
				id
				project {
					...ProjectSummary
				}
				# profile {
				# 	...UserSummary
				# }
				### Redundant. This query returns the projects the user is a trademaster on.
				### No need to return the profile we already have
				# profile {
				# 	...UserSummary
				# 	applications {
				# 		id
				# 	}
				# }
			}
		}
	}
	${USER_SUMMARY_FRAG}
	${PROJECT_SUMMARY_FRAG}


`;
