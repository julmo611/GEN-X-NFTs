import React from 'react';
import msnbc from '../assets/MSNBC.jpg';
import nbc from '../assets/NBC-Nightly-News.jpg';
import yahoo from '../assets/yahoo-logo.png';
import sarahImg from '../assets/Sarah-on-NBC.png';

export default function Media() {
	return (
		<div className="mediaI">
			<h2>MEDIA + INQUIRIES</h2>
			<div className="mediaContent">
				<p>
					Contact:{' '}
					<a
						href="mailto:genxnfts@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						genxnfts@gmail.com
					</a>
				</p>
			</div>
			<div className="mediaLinks">
				<h3>As Featured on</h3>
				<img src={msnbc} alt="MSNBC Logo" />
				<img src={yahoo} alt="Yahoo Logo" />
				<img src={nbc} alt="NBC Logo" />
			</div>
			<div className="sarahImg">
				<img src={sarahImg} alt="Sarah on NBC" />
			</div>
		</div>
	);
}
