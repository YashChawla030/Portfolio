import React from "react";
import "./Navigation.css";
import {  Link } from 'react-router-dom';

const Navigation = () => {
	const downloadCV = () => {
		console.log("Hello world...")
	}
	return(
		<div className="nav-bar">
			<ul className="navigation-bar">
				<li className="nav-item">
					<label className="label-text">Hello</label>
				</li>
				<li className="nav-item">
					<Link className="navigation-link" to="/">Home</Link>
				</li>
				<li className="nav-item">
					<Link className="navigation-link" to="/projects">Projects</Link>
				</li>
				<li className="nav-item">
					<Link className="navigation-link" to="/contact">Contact Me</Link>
				</li>
				<a href={require('../assets/AbhishekSingh_Resume.pdf')} download="AbhishekSingh_Resume" target="_blank">
					<button className="link-btn" onClick={downloadCV} >DOWNLOAD CV</button>
				</a>
			</ul>
		</div>
	)
}

export default Navigation;