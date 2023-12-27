import React from 'react';
import ServiceCardView from '../components/ServiceCardView';
import './Home.css';
import { BsGithub, BsInstagram, BsLinkedin, BsStackOverflow } from 'react-icons/bs';
// import Contact from './contact';
import Project from './projects';
import PortfileImage from '../assets/ProfileImage.png';


function Home (){
	return(
		<div className='middle'>
			<div className='upper-intro'>
				<div className='image-container'>
					<img className='image' src={PortfileImage} alt="Logo" />
				</div>
				<div className='intro-div'>
					<div className='intro-title'>
						<h1 style={{'fontSize':18}} className='header-title'></h1>
					</div>
					<div className='intro-title'>
						<h1 style={{'fontSize':32, 'fontWeight': 'bold'}} className='header-title'>Yash Chawla</h1>
					</div>
					<div className='intro-title'>
						<h1 style={{'fontSize':22, 'color' : '#ddd' }} className='header-title'>Web Developer And Game Designer</h1>
					</div>
					<div className='intro-title'>
						{/* <p className='discription'>A web developer is a programmer who develops World Wide Web 
							applications using a client–server model. The applications 
							typically use HTML, CSS, and JavaScript in the client.</p> */}
							{<p>.
								.
								.
							</p>                      							
							}
					</div>
					<div className='intro-title'>
						<label style={{'fontSize':20}} className='header-title'>--------------------------</label>
					</div>
					<div className="social-sites">
						
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
				</div>
				<div className='image-container-right'>
					<img className='image' src={PortfileImage} alt="Logo" />
				</div>
			</div>
			<div className='social-portion'>
				<div className='header-view'>
					<div className='service-header'>
						<h1 style={{'color':'white' , 'textAlign':'left'}} >My Services</h1>
						{/* <h1 style={{'color':'#fff', 'fontSize':55}}>What I Do</h1> */}
					</div>
				</div>
				<div className='card-container'>
					<ServiceCardView name={'Web Development'} className="card"/>
					<ServiceCardView name={'Unity Game Development'} className="card"/>
					{/* <ServiceCardView name={'iOS Developer'} className="card"/> */}
				</div>
			</div>
			<Project />
			{/* <Contact /> */}
		</div>
	)
}
  
export default Home;