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
`
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
    {
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
                donations {
                    id
                    amount
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
            }
            likedProjects {
                id
                project {
                    id
                    name
                }
            }
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

            studentProjects {
                id
                project {
                id
                name
                }
            }
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