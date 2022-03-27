import BehindProject from './components/BehindProject';
import Footer from './components/Footer';
import Header from './components/Header';
import Hello from './components/Hello';
import Navigation from './components/Navigation';
import RoadMap from './components/RoadMap';
import TheKey from './components/TheKey';
import WeNeedToTalk from './components/WeNeedToTalk';
import WhatMakeSpecial from './components/WhatMakeSpecial';

function App() {
	return (
		<div className="App overlayImage">
			<div className="contentWrap">
				<Navigation />
				<Header />
				<BehindProject />
				<RoadMap />
				<WeNeedToTalk />
				<TheKey />
				<WhatMakeSpecial />
				<Hello />
			</div>
			<Footer />
		</div>
	);
}

export default App;
