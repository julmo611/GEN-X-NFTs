import React from 'react';
import facebook from '../assets/Facebook.png';
import twitter from '../assets/Twitter.png';
import instagram from '../assets/Instagram.png';
import discord from '../assets/Discord.png';
import tiktok from '../assets/Tiktok.png';

export default function Navigation() {
	return (
		<div className="navbar">
			<div className="linksNav">
				<a href="#start">Start here</a>
				<a href="#story">Story</a>
				<a href="#roadmap">Roadmap</a>
				<a href="#vip">VIP list</a>
				<a href="#team">Team</a>
				<a href="#faq">FAQ</a>
			</div>
			<div className="socialLinks">
				<a href="http://" target="_blank" rel="noopener noreferrer">
					<img src={facebook} alt="Social Media" />
				</a>
				<a href="http://" target="_blank" rel="noopener noreferrer">
					<img src={twitter} alt="Social Media" />
				</a>
				<a href="http://" target="_blank" rel="noopener noreferrer">
					<img src={instagram} alt="Social Media" />
				</a>
				<a href="http://" target="_blank" rel="noopener noreferrer">
					<img src={discord} alt="Social Media" />
				</a>
				<a href="http://" target="_blank" rel="noopener noreferrer">
					<img src={tiktok} alt="Social Media" />
				</a>
			</div>
		</div>
	);
}
