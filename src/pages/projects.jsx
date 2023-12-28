import React from 'react';
import './Projects.css';
import ServiceCardView from '../components/ServiceCardView';


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
						<ServiceCardView name={'Chat-bot in Python'} className="card"/>
					</div>
					<div className='project-container'>
						<ServiceCardView name={'Music Streaming Web Application'} className="card"/>
						<ServiceCardView name={'Horror Game (Coming Soon...)'} className="card"/>
					
					</div>
				</div>
				
			</div>
    )
}
export default Project;