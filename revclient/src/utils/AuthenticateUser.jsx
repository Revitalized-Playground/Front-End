import React from 'react';
import { 
    withRouter, 
} from "react-router-dom";
import jwtdecode from "jwt-decode";


class AuthenticateUser extends React.Component {

    componentDidMount() {
        const token = this.props.match.params.token.replace("#", "");
        const decoded = jwtdecode(token);
        
        if(Date.now() / 1000 > decoded.exp) {
            localStorage.removeItem("token");
            this.props.history.push("/login");
        }
        else {
            localStorage.setItem("token", token)
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <>
                
            </>
        );
        
    }

}

        



export default withRouter(AuthenticateUser);

