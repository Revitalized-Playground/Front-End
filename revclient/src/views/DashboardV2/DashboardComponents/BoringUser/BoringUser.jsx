import React from 'react';
import { Link, withRouter } from "react-router-dom";


const BoringUser = () => {

    return (
        <section className="boring-user">
            <div>Check out some projects!</div>
            <Link to="/browse">
                <button>
                    Browse
                </button>
            </Link>
        </section>
    );
}


export default withRouter(BoringUser);

