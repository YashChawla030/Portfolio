import React from "react";
import './Footer.css';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return(
		<div className="footer">
			<div className='border-line'>
				<label htmlFor="Intro"></label>
				<div className="thanks-label">
					<label>Thank you for visit</label>
				</div>
				<div className="url-div">
					<a href="https://www.instagram.com/harsh_r.a.n.a/" className="icon-link">
						<BsInstagram fontSize={26} color="white"/>
					</a>
					<a href="https://www.linkedin.com/in/abhishek-singh29" className="icon-link">
						<BsLinkedin fontSize={26} color="white"/>
					</a>
					<a href="https://github.com/Aabhishek29" className="icon-link">
						<BsGithub fontSize={26} color="white"/>
					</a>
				</div>
				<div className="thanks-label">
					<label>Copy Right 2023</label>
				</div>
			</div>
		</div>
	)
}

export default Footer;