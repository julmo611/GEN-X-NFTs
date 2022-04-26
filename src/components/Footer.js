import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../assets/Facebook.png';
import twitter from '../assets/Twitter2.png';
import instagram from '../assets/Instagram.png';
import discord from '../assets/Discord2.png';
import tiktok from '../assets/Tiktok.png';
import linkedin from '../assets/linkedin.png';

export default function Footer() {
	return (
		<footer>
			<div className="fSocialMedia">
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
			<div className="footerNavigation">
				<Link to="/Privacy-Policy">Privacy Policy</Link>
				<Link to="/oficial-rules">Oficial Rules</Link>
				<Link to="/terms-and-conditions">Terms and Conditions</Link>
			</div>
			<h5>
				<a
					href="https://webdesignpilot.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Designed by Web Design Pilot
				</a>
			</h5>
			<h5>Copyright © 2022 The Dream Factory, LLC. All Rights Reserved.</h5>
		</footer>
	);
}
