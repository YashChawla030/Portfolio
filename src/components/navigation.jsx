import React from "react";
import "./Navigation.css";
import {  Link } from 'react-router-dom';
import { TiThMenu } from 'react-icons/ti'

const Navigation = () => {
	const downloadCV = () => {
		console.log("Hello world...")
	}	
	return(
		<div className="nav-bar">
			<div className="navigation-title">
				<label className="label-text"></label>
			</div>
			<ul className="navigation-bar">
				<li className="nav-item">
					<Link className="navigation-link" to="/">Home</Link>
				</li>
				<li className="nav-item">
					<Link className="navigation-link" to="/projects">Projects</Link>
				</li>	
				<li className="nav-item">
					<Link className="navigation-link" to="/contact">Contact Me</Link>
				</li>
				
				<a href={require('../assets/Abhishek_Resume.pdf')} download="Abhishek_Resume" target="_blank">
					<button className="link-btn" onClick={downloadCV} >DOWNLOAD CV</button>
				</a>
			</ul>
			<TiThMenu className="mobile-menu" fontSize={28}/>
		</div>
	)
}

export default Navigation;