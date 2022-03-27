import React from 'react';
import facebook from '../assets/Facebook.png';
import twitter from '../assets/Twitter2.png';
import instagram from '../assets/Instagram.png';
import discord from '../assets/Discord2.png';
import tiktok from '../assets/Tiktok.png';

export default function Footer() {
	return (
		<footer>
			<div className="fSocialMedia">
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
			<h5>The Latchkey Kids 2022.</h5>
		</footer>
	);
}
