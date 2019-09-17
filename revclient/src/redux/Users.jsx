import React from "react";
// import { Query } from "react-apollo";
// import gql from "graphql-tag";
import { connect } from "react-redux";

import { 
    // userLogin, 
    getUsers, 
} from "../redux/actions/index.js";


class Users extends React.Component {
    state = {
        users: ""
    }


    componentDidMount() {
        this.props.getUsers();
        this.setState({
            users: this.props.users
        })
    }



    render() {

        console.log("Props in users from redux ---> ", this.props);
        
        return (
            <section className="users">
                <h1>Users</h1>
            </section >
        )
    }
}
    






// <Query
//     query={gql`{
//         users {
//             id
//             firstName
//             lastName
//             password
//         }
//     }`}
// >

//     {({ loading, error, data }) => {
//         if (loading) return <p>Loading...</p>;

//         if (error) return <p>Error :(</p>;
        
//         // console.log("data in Users", loading, error, data.users);
        
//         return data.users.map(({ id, lastName }) => (

//             <div key={id} >
//                 <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
//                 <p>{`${id} of ${lastName}`}</p>
//             </div>

//         ));
//     }}

// </Query>




const mapStateToProps = state => ({
    users: state.usersReducer.users,
    fetching: state.usersReducer.fetching,
    logout: state.usersReducer.logout,
    error: state.usersReducer.error,

})

export default connect(
    mapStateToProps,
    { 
        // userLogin,
        getUsers, 
    }
)(Users)

