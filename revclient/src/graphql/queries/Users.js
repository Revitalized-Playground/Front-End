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



        }

    }
`;
