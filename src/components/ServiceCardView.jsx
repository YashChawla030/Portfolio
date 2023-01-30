import React from "react";
import './ServiceCardView.css';
import { MdDesktopMac } from 'react-icons/md';
import { DiAndroid } from 'react-icons/di';
import { SiApple } from 'react-icons/si';
import { RiWindowFill, RiBracesLine } from 'react-icons/ri';

const ServiceCardView = ({name}) => {

	const serviceData = {
		'Web Developer' : "I have good hands on Web Development.I develop my own portfolio by using ReactJs and develop website used to save important documents by using Web Techonologyies like HTML, CSS, JavaScript",
		'Android Developer': "I have good hands on Android Development. I done and intership in android development and create a web fernished CRM portal android Application with exprience in techonolgy like WebRTC, MQTT, and MVVM architechture",
		'iOS Developer' : "I have working experience in Swift Programming and develop an iOS AR application during my second intern",
		'Save Text' : "I develop this project during my 6th semister by using django as backend and html,css, javascript for frontend development.",
		'Voice Based Mail Sender' : 'I develop this project from my 4th semister mini project and use python tkinter framework for develop window application. this application bassically used to server Mail unilities.',
		'LetsMeet' : "I develop this project during my 4 year by using django. it is a simple meeting developed by WebRTC python to created Peer-to-Peer RTC connection.",
		'DSA C++' : "DSA in C++",
		'Stress Analysis System' : 'this is my final year major project which i developed with my group this is AI based stress analysis system created by using MERN stack',
		'ANO Messaging App' : 'I develop this project to learn android development. this is simple chatting application created in kotlin android.'
	}

	const icons = (name) => {
		if (name === 'Android Developer' || name === 'ANO Messaging App') {
			return <DiAndroid fontSize={22} color={'red'} />
		}
		if (name === 'iOS Developer') {
			return <SiApple fontSize={22} color={'red'} />
		}
		if( name === 'DSA C++') {
			return <RiBracesLine fontSize={22} color={'red'} />
		}
		if (name === 'Voice Based Mail Sender') {
			return <RiWindowFill fontSize={22} color={'red'} />
		}
		else{
			return <MdDesktopMac fontSize={22} color={'red'}/>
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