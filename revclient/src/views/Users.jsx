import React from "react";
import { connect } from "react-redux";

import { 
    // userLogin, 
    getUsers, 
} from "../redux/actions/getUsers.js";


class Users extends React.Component {
    state = {
        users: ""
    }


    componentDidMount() {
        this.props.getUsers();
        // this.setState({
        //     users: this.props.users
        // })
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
    




const mapStateToProps = state => ({
    users: state.getUsersReducer.users,

})

export default connect(
    mapStateToProps,
    { 
        // userLogin,
        getUsers, 
    }
)(Users)

