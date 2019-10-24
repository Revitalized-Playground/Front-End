import gql from 'graphql-tag';
import {
	PROJECT_SUMMARY_FRAG,
	USER_SUMMARY_FRAG,
	COMMENTS_FRAG,
	TASKS_FRAG,
} from '../fragments';

export const GET_PROJECTS = gql`
	query projects {
		projects {
			...ProjectSummary
		}
	}
	${PROJECT_SUMMARY_FRAG}
`;


export const GET_RECOMMENDED_PROJECTS = gql`
	query recommendedProjects {
		recommendedProjects {
			...ProjectSummary
		}
	}
	${PROJECT_SUMMARY_FRAG}
`;


export const GET_PROJECTS_NEAR_ME = gql`
	query projectsNearMe {
		projectsNearMe {
			id
			slug
			name
			description
			address
			city
			state
			zip
			goalAmount
			duration
			featuredImage
		}
	}
`;


export const GET_PROJECT_BY_ID = gql`
	query projectById($id: ID!) {
		projectById(id: $id) {
			...ProjectSummary
			profile {
				...UserSummary
			}
			trades {
            	id
				name
				description
        	}
			tasks {
				...Tasks
				apprentices {
					id
					profile {
						...UserSummary
					}
				}
			}
			tradeMasters {
            	id
				profile {
					...UserSummary
				}
        	}
			comments {
				...Comments
				profile {
					...UserSummary
				}
			}
		}
	}
	${USER_SUMMARY_FRAG}
	${COMMENTS_FRAG}
	${PROJECT_SUMMARY_FRAG}
	${TASKS_FRAG}
`;


export const GET_PROJECT_BY_SLUG = gql`
	query projectById($slug: String!) {
		projectBySlug(slug: $slug) {
			...ProjectSummary
			profile {
				...UserSummary
			}
			comments {
				...Comments
				profile {
					...UserSummary
				}
			}
		}
	}
	${USER_SUMMARY_FRAG}
	${COMMENTS_FRAG}
	${PROJECT_SUMMARY_FRAG}
`;


export const QUERY_PROJECTS = gql`
	query projects($query: String!) {
		projects(query: $query) {
			...ProjectSummary
		}
	}
	${PROJECT_SUMMARY_FRAG}
`

export const GET_ALL_PROJECTS = gql `
	query getProjectsView {
		getProjectsView {
			spotlight{
				id
				name
				slug
				description
				featuredImage
			}

			projectsNearYou {
				id
				slug
				name
				description
				state
				city
				featuredImage
			}

			recommendedProjects {
				id
				slug
				name
				description
				country
				state
				city
				zip
				address
				goalAmount
				duration
				featuredImage
				donations {
					id
					amount
				}
				likes {
					id
					profile {
						id
						firstName
						lastName
					}
					project {
						id
					}
				}
			}

			newAndNoteworthyProjects {
				id
				city
				state
				name
				featuredImage
				description
				slug
			}
		}
	}
`
