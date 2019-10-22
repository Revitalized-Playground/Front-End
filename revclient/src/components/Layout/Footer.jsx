import React from "react";
import { Link } from 'react-router-dom';
import { FaGithub, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const links = [
	// { path: "#", label: "Learn More" },
	{ path: "/about", label: "Team" },
	{ path: "/createproject", label: "Create Project" },
	{ path: "/projects", label: "Projects" },
].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});


export default function Footer() {
	return (
		<div className="footer">

			<ul className="links-container">
				{links.map(({ key, path, label }) => (
					<li key={key}>
						<Link to={path}>{label}</Link>
					</li>
				))}
			</ul>

			<div className="social-links-container">
				<a href="https://github.com" alt="Github"> <FaGithub /> </a>
				<a href="https://facebook.com" alt="Facebook"> <FaFacebookF /> </a>
				<a href="https://Linkedin.com" alt="LinkedIn"> <FaLinkedin /> </a>
				<a href="https://twitter.com" alt="Twitter"> <FaTwitter /> </a>
			</div>
			
			<div className="bottom-footer">
				<div className="copyright">ReVitalize</div>
				<i>&copy;2019 All Rights Reserved</i>
			</div>

		</div>
	);
}


