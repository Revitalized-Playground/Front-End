import gql from 'graphql-tag';
import { 
	USER_SUMMARY_FRAG, 
	TRADES_FRAG, 
} from '../fragments';


export const ADD_COMMENT = gql`
	mutation($data: CreateProjectCommentInput!) {
		createProjectComment(data: $data) {
			id
			comment
			profile {
				...UserSummary
			}
		}
	}
	${USER_SUMMARY_FRAG}
`;

export const ADD_PROJECT = gql`
	mutation($data: CreateProjectInput!) {
		createProject(data: $data) {
			id
		}
	}
`;


export const DELETE_PROJECT = gql`
	mutation($id: ID!) {
		deleteProject(id: $id) {
			name
		}
	}
`;


export const DONATE_TO_PROJECT = gql`
	mutation($id: ID!, $data: CreateProjectDonationInput!) {
		createProjectDonation(id: $id, data: $data) {
			id
		}
	}
`;

export const REMOVE_COMMENT = gql`
    mutation($id: ID!) {
        deleteProjectComment(id: $id) {
            id
        }
    }
`;


export const EDIT_COMMENT = gql`
    mutation($data: UpdateProjectCommentInput!) {
        updateProjectComment(data: $data) {
            id
            comment
        }
    }
`;


export const CREATE_PROJECT_TRADE = gql`
    mutation($data: CreateProjectTrade!) {
        createProjectTrade(data: $data) {
			id
			project {
				id
				trades {
					id
					name
					description
				}
			}
			name
			description
        }
    }
`;


export const CREATE_PROJECT_TASK = gql`
    mutation($data: CreateProjectTask!) {
        createProjectTask(data: $data) {
            id
        }
    }
`;

export const APPLY_TO_PROJECT = gql`
	mutation($data: CreateProjectApplicant!){
		createProjectApplicant(data: $data) {
			id
			status
		}
	}
`

export const ACCEPT_PROJECT_APPLICANT = gql`
	mutation($data: AssignProjectApplicant!) {
		acceptProjectApplicant(data: $data) {
			id
		}
	}
`

export const DECLINE_PROJECT_APPLICANT = gql`
	mutation($data: AssignProjectApplicant!) {
		declineProjectApplicant(data: $data) {
			id
		}
	}
`