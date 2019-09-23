import { gql } from 'apollo-boost';


export const GET_TODOS = gql`
query GetTodos {
  todos {
    id
    type
  }
}
`;

export const TODOS = gql`
{
  todos {
    id
  }
}
`;

