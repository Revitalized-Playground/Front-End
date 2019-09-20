import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Nav from '../components/Layout/Nav.jsx';
import Footer from "../components/Layout/Footer.jsx";

import Router from "./Router";
import RouterUser from "./RouterUser";

// import ProjectsHome from "../views/ProjectsHome/ProjectsHome.jsx";
// import Users from "../redux/Users.jsx";

// import Router from "../router/Router.jsx";
// import RouterAuth from "../router/RouterAuth.jsx";


import '../styles/base.scss';



const App = () => (
	
		<BrowserRouter>

			<Nav />



			<Router />

			<RouterUser />



			<Footer />

		</BrowserRouter>

);


export default App;

