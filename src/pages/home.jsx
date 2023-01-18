import React from 'react';
import CardView from '../components/CardView';
import './Home.css';

function Home (){
	return( 
		<div className='middle'>
			<div className='intro-div'>
				<div className='intro-title'>
					<h1 style={{'fontSize':18}} className='header-title'>Hello, I'm</h1>
				</div>
				<div className='intro-title'>
					<h1 style={{'fontSize':28}} className='header-title'>Abhishek Singh</h1>
				</div>
				<div className='intro-title'>
					<h1 style={{'fontSize':22}} className='header-title'>Android Developer And iOS Developer</h1>
				</div>
				<div className='intro-title'>
					<p className='discription'>A web developer is a programmer who develops World Wide Web 
						applications using a client–server model. The applications 
						typically use HTML, CSS, and JavaScript in the client.</p>
				</div>
			</div>
		</div>
	)
}
  
export default Home;