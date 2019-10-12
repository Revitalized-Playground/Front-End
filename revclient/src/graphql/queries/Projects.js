import gql from 'graphql-tag';
import { PROJECT_SUMMARY_FRAG, USER_SUMMARY_FRAG, COMMENTS_FRAG } from '../fragments';


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

export const GET_PROJECT = gql`
	query project($id: ID!) {
		project(id: $id) {
			...ProjectSummary
			profile {
				...UserSummary
			}
		}
	}
	${USER_SUMMARY_FRAG}
	${COMMENTS_FRAG}
	${PROJECT_SUMMARY_FRAG}
`;
