import React from 'react';
import Collage from '../components/Collage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hello from '../components/Hello';
import Media from '../components/Media';
import Navigation from '../components/Navigation';
import Nfts101 from '../components/Nfts101';
import RoadMap from '../components/RoadMap';
import TheKey from '../components/TheKey';

export default function Home() {
	return (
		<div className="App overlayImage">
			<div className="specaialBackg">
				<div className="contentWrap">
					<Navigation />
					<Header />
					<Collage />
					<TheKey />
					<RoadMap />
					<Hello />
					<Nfts101 />
					<Media />
				</div>
				<Footer />
			</div>
		</div>
	);
}
