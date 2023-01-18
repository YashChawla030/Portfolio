import React from 'react';
import CardView from '../components/CardView';
import './Home.css';
import { BsGithub, BsLinkedin, BsStackOverflow } from 'react-icons/bs';


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
					<div className="url-div">
						<a href="https://stackoverflow.com/users/18128321/abhishek-singh" className="icon-link">
							<BsStackOverflow fontSize={26} color="white"/>
						</a>
						<a href="https://www.linkedin.com/in/abhishek-singh29" className="icon-link">
							<BsLinkedin fontSize={26} color="white"/>
						</a>
						<a href="https://github.com/Aabhishek29" className="icon-link">
							<BsGithub fontSize={26} color="white"/>
						</a>
					</div>
				</div>
				<div className='image-container'>

				</div>
			</div>
			<div className='social-portion'>
				
			</div>
		</div>
	)
}
  
export default Home;