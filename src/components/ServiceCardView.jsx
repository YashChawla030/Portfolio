import React from "react";
import './ServiceCardView.css';
import { MdDesktopMac } from 'react-icons/md';
import { DiAndroid } from 'react-icons/di';
import { SiUnity } from 'react-icons/si';

const ServiceCardView = ({name}) => {

	const serviceData = {
		'Web Developer' : "I have good hands on Web Development.I develop my own portfolio by using ReactJs and develop website used to save important documents by using Web Techonologyies like HTML, CSS, JavaScript",
		'Android Developer': "I have good hands on Android Development. I done and intership in android development and create a web fernished CRM portal android Application with exprience in techonolgy like WebRTC, MQTT, and MVVM architechture",
		'Game Developer' : "I have working experience in Unity and develop an android gaming application and publish on Play Store. with the help of Unity C# scripting."
	}

	const icons = (name) => {
		if (name === 'Web Developer') {
			return <MdDesktopMac fontSize={22} color={'red'}/>
		}
		if (name === 'Android Developer') {
			return <DiAndroid fontSize={22} color={'red'} />
		}
		if (name === 'Game Developer') {
			return <SiUnity fontSize={22} color={'red'} />
		}
	}

  	return(
		<>
			<div className="card">
					{icons(name)}
				<header className="card-header">{name}</header>
				<div className="discription-container">
					<p>
						{serviceData[name]}
					</p>
				</div>
			</div>
		</>
  	)
}

export default ServiceCardView;