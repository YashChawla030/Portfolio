import React from "react";
import './ServiceCardView.css';
import { MdDesktopMac } from 'react-icons/md';
//import { DiAndroid } from 'react-icons/di';
//import { SiApple } from 'react-icons/si';
import { RiWindowFill, RiBracesLine } from 'react-icons/ri';
import { FaMusic, FaUnity } from "react-icons/fa";

const ServiceCardView = ({name}) => {

	const serviceData = {
		'Web Development' : "Passionate web developer with a knack for crafting elegant and responsive solutions, dedicated to creating seamless user experiences through a blend of creativity and technical expertise.",
		'Unity Game Development': "I have a deep passion for game development and 3D map design and bringing captivating game experiences to life.",
		'Online Library Management System' : "This system helps to manage a library and will keep record of book issue services and history.",
		'Voice Based Email for Blind People' : "The system will not let the user make use of keyboard instead will work only on mouse operation and speech conversion to text.",
		'Chat-bot in Python' : "A chat-bot that can ask for queries and try to resolve them along with taking the ratings of the quality.",
		'Music Streaming Web Application' : "This application allows users to listen to songs and also search for songs using search bar. This is developed using the MERN stack and Content based filtering is used to recommend similar songs for the searched song based on artist or genre.",
		'Horror Game (Coming Soon...)' : 'Fear awaits in this multiplayer horror game. Join friends, face the unknown, and survive the terror together.',
		'Impossible Win' : 'Designed and developed "Impossible Win," a casual game available for desktop platforms and playable via Unity Play, a WebGLservice for browser-based gaming.'
	}

	const icons = (name) => {
		if (name === 'Music Streaming Web Application' || name === 'ANO Messaging App') {
			return <FaMusic fontSize={22} color={'red'} />
		}
		if (name === 'Unity Game Development') {
			return <FaUnity fontSize={22} color={'red'} />
		}
		if( name === 'Chat-bot in Python') {
			return <RiBracesLine fontSize={22} color={'red'} />
		}
		if (name === 'Voice Based Email for Blind People') {
			return <RiWindowFill fontSize={22} color={'red'} />
		}
		if (name === 'Horror Game (Coming Soon...)') {
			return <FaUnity fontSize={22} color={'red'} />
		}	
		if (name === 'Impossible Win') {
			return <FaUnity fontSize={22} color={'red'} />	
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
				{ name === "Horror Game (Coming Soon...)" && <a href={"https://drive.google.com/drive/folders/1GaBb1SCfzcIqi-Xe3xX9kZdTcamwjFkv?usp=drive_link"} target="_blank" rel="noreferrer">
					<button className="dwld-btn">Check Out</button>
				</a>}
				
				{ name === "Impossible Win" && <a href={"https://play.unity.com/en/games/ab9ca774-d743-4934-b51d-4e242fae1941/impossible-win"} target="_blank" rel="noreferrer">
					<button className="dwld-btn">Play Now</button>
				</a>}
				</div>
			
		</>
  	)
}

export default ServiceCardView;