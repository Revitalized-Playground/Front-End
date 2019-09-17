import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";


const Users = () => (
    <Query
        query={gql`{
            users {
                id
                firstName
                lastName
                password
            }
        }`}
    >
    {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;

        if (error) return <p>Error :(</p>;
        
        console.log("data in Users", loading, error, data.users);
        
        return data.users.map(({ id, lastName }) => (

            <div key={id} >
                <hr/>
                <hr/>
                <hr/><hr/><hr/><hr/><hr/><hr/>
                <p>{`${id} of ${lastName}`}</p>
            </div>

        ));
    }}
  </Query>
);

export default Users;

