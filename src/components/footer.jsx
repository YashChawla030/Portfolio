import React from "react";
import './Footer.css';
import { BsGithub, BsLinkedin, BsInstagram, BsEnvelopeFill, BsFillEnvelopeOpenFill, BsFillEnvelopeFill } from 'react-icons/bs';

const Footer = () => {
	const handleEmailClick = () => {
		window.location.href = 'mailto:yashchawla030@gmail.com';
	  };
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
						<a className="social-items">
							<BsEnvelopeFill fontSize={26} onClick={handleEmailClick} color="white"/>
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