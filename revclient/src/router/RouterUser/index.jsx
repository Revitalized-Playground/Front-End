import React from 'react';
import { Route } from "react-router-dom";



const RouterUser = () => {
    return (
        <>


			<Route
				// exact
				path="/projects"
				render={() => (
					<ProjectsHome />
				)}
			/>

			<Route
				// exact
				path="/users"
				render={() => (
					<Users />
				)}
			/>


        </>
    );
}

export default RouterUser

