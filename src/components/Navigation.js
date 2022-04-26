import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../assets/Facebook.png';
import twitter from '../assets/Twitter.png';
import instagram from '../assets/Instagram.png';
import discord from '../assets/Discord.png';
import tiktok from '../assets/Tiktok.png';
import linkedin from '../assets/linkedin.png';

export default function Navigation() {
	return (
		<div className="navbar">
			<div className="linksNav">
				<Link to="/">ABOUT THE NFTS</Link>
				<a href="/#roadmap">ROADMAP</a>
				<a href="/#team">TEAM</a>
				<a href="/#nfts101">NFTS 101</a>
				<a href="/#media">MEDIA + INQUIRIES</a>
			</div>
			<div className="socialLinks">
				<a
					href="https://twitter.com/GENxNFTs"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={twitter} alt="Social Media" />
				</a>
				<a
					href="https://discord.com/invite/UeZHygwtdt"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={discord} alt="Social Media" />
				</a>
				<a
					href="https://www.facebook.com/groups/genxnfts"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={facebook} alt="Social Media" />
				</a>
				<a
					href="https://www.linkedin.com/in/sarahmonson/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={linkedin} alt="Social Media" />
				</a>
				<a
					href="https://www.instagram.com/genxnfts"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={instagram} alt="Social Media" />
				</a>

				<a
					href="https://www.tiktok.com/@genxnfts"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={tiktok} alt="Social Media" />
				</a>
			</div>
		</div>
	);
}
