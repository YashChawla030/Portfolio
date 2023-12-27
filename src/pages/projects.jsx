import React from 'react';
import './Projects.css';
import ServiceCardView from '../components/ServiceCardView';
import { FaArrowRight } from 'react-icons/fa'; 

function Project () {
    return (
      <div className='project-section'>
				<div className='label-container'>
					<label>Recent Work and Projects</label>
				</div>
				<div>
					<div className='project-container'>
						<ServiceCardView name={'Online Library Management System'} className="card" />
						<ServiceCardView name={'Voice Based Email for Blind People'} className="card"/>
						<ServiceCardView name={'LetsMeet'} className="card"/>
					</div>
					<div className='project-container'>
						<ServiceCardView name={'DSA C++'} className="card"/>
						<ServiceCardView name={'Stress Analysis System'} className="card"/>
						<ServiceCardView name={'ANO Messaging App'} className="card"/>
					</div>
				</div>
				{/* <div>
					<a className='check-btn' href='https://github.com/Aabhishek29'>
						<label style={{'margin':5, 'cursor': 'pointer'}}>View All Project</label>
						<FaArrowRight size={12}/>
					</a>
				</div> */}
			</div>
    )
}
export default Project;