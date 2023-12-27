import React from "react";
import './ServiceCardView.css';
import { MdDesktopMac } from 'react-icons/md';
import { DiAndroid } from 'react-icons/di';
import { SiApple } from 'react-icons/si';
import { RiWindowFill, RiBracesLine } from 'react-icons/ri';
import { FaUnity } from "react-icons/fa";

const ServiceCardView = ({name}) => {

	const serviceData = {
		'Web Development' : "Passionate web developer with a knack for crafting elegant and responsive solutions, dedicated to creating seamless user experiences through a blend of creativity and technical expertise.",
		'Unity Game Development': "I have a deep passion for game development and 3D map design and bringing captivating game experiences to life.",
		// 'iOS Developer' : "I have working experience in Swift Programming and develop an iOS AR application during my second intern",
		'Online Library Management System' : "This system helps to manage a library and will keep record of book issue services and history.",
		'Voice Based Email for Blind People' : "The system will not let the user make use of keyboard instead will work only on mouse operation and speech conversion to text.",
		'LetsMeet' : "I develop this project during my 4 year by using django. it is a simple meeting developed by WebRTC python to created Peer-to-Peer RTC connection.",
		'DSA C++' : "DSA in C++",
		'Stress Analysis System' : 'this is my final year major project which i developed with my group this is AI based stress analysis system created by using MERN stack',
		'ANO Messaging App' : 'I develop this project to learn android development. this is simple chatting application created in kotlin android.'
	}

	const icons = (name) => {
		if (name === 'Android Developer' || name === 'ANO Messaging App') {
			return <DiAndroid fontSize={22} color={'red'} />
		}
		if (name === 'Unity Game Development') {
			return <FaUnity fontSize={22} color={'red'} />
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