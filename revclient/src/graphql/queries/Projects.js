import gql from 'graphql-tag';
import { PROJECT_SUMMARY_FRAG, USER_SUMMARY_FRAG, COMMENTS_FRAG } from '../fragments';

export const IP = gql`
	query ip {
		ip
	}
`;

export const GET_PROJECTS = gql`
	query projects {
		projects {
			...ProjectSummary
		}
	}
	${USER_SUMMARY_FRAG}
	${COMMENTS_FRAG}
	${PROJECT_SUMMARY_FRAG}
`;

export const GET_PROJECT_BY_ID = gql`
	query projectById($id: ID!) {
		projectById(id: $id) {
			...ProjectSummary
			profile {
				...UserSummary
			}
			comments {
				...Comments
			}
		}
	}
	${USER_SUMMARY_FRAG}
	${COMMENTS_FRAG}
	${PROJECT_SUMMARY_FRAG}
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
			}
		}
	}
	${USER_SUMMARY_FRAG}
	${COMMENTS_FRAG}
	${PROJECT_SUMMARY_FRAG}
`;
