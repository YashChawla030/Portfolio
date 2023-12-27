import React from "react";
import './Footer.css';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return(
		<div className="footer">
			<div className='border-line'>
				<label htmlFor="Intro"></label>
				<div className="thanks-label">
					<label>Thank you for your visit</label>
				</div>
				<div className="url-div">
				<a href="https://linkedin.com/in/yashchawla030" className="social-items">
							<BsLinkedin fontSize={26} color="white"/>
						</a>
						<a href="https://github.com/YashChawla030" className="social-items">
							<BsGithub fontSize={26} color="white"/>
						</a>
						<a href="https://www.instagram.com/_yash_chawla_?igsh=MWhuaW1lc3N3eGN2bw%3D%3D&utm_source=qr" className="social-items">
							<BsInstagram fontSize={26} color="white"/>
						</a>
				</div>
				{/* <div className="thanks-label">
					<label>Copy Right 2023</label>
				</div> */}
			</div>
		</div>
	)
}

export default Footer;