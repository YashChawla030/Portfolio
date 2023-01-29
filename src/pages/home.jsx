import React from 'react';
import ServiceCardView from '../components/ServiceCardView';
import './Home.css';
import { BsGithub, BsLinkedin, BsStackOverflow } from 'react-icons/bs';
import Contact from './contact';


function Home (){
	return(
		<div className='middle'>
			<div className='upper-intro'>
				<div className='intro-div'>
					<div className='intro-title'>
						<h1 style={{'fontSize':18}} className='header-title'>Hello, I'm</h1>
					</div>
					<div className='intro-title'>
						<h1 style={{'fontSize':32, 'fontWeight': 'bold'}} className='header-title'>Abhishek Singh</h1>
					</div>
					<div className='intro-title'>
						<h1 style={{'fontSize':22, 'color' : '#ddd' }} className='header-title'>Android Developer And iOS Developer</h1>
					</div>
					<div className='intro-title'>
						<p className='discription'>A web developer is a programmer who develops World Wide Web 
							applications using a client–server model. The applications 
							typically use HTML, CSS, and JavaScript in the client.</p>
					</div>
					<div className='intro-title'>
						<label style={{'fontSize':20}} className='header-title'>FIND ME ON</label>
					</div>
					<div className="social-sites">
						<a href="https://stackoverflow.com/users/18128321/abhishek-singh" className="social-items">
							<BsStackOverflow fontSize={26} color="white"/>
						</a>
						<a href="https://www.linkedin.com/in/abhishek-singh29" className="social-items">
							<BsLinkedin fontSize={26} color="white"/>
						</a>
						<a href="https://github.com/Aabhishek29" className="social-items">
							<BsGithub fontSize={26} color="white"/>
						</a>
					</div>
				</div>
				<div className='image-container'>

				</div>
			</div>
			<div className='social-portion'>
				<div className='header-view'>
					<div className='service-header'>
						<label style={{'color':'#ff0000'}} >My Services</label>
						<h1 style={{'color':'#fff', 'fontSize':55}}>What I Do</h1>
					</div>
				</div>
				<div className='card-container'>
					<ServiceCardView name={'Web Developer'} className="card"/>
					<ServiceCardView name={'Android Developer'} className="card"/>
					<ServiceCardView name={'iOS Developer'} className="card"/>
				</div>
			</div>
			<Contact />
		</div>
	)
}
  
export default Home;