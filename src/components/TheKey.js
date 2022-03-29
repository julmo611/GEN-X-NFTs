import React from 'react';
import roller from '../assets/skate-roller.png';
import pizza from '../assets/pizza.png';
import key from '../assets/key.png';

export default function TheKey() {
	return (
		<div className="keySection">
			<img src={key} alt="Key icon" />
			<h2>The key</h2>
			<p>
				This is the hallmark identifying factor of every Latchkey Key. It
				defined us. So, your NFT’s KEY will literally open doors for you IRL and
				in the Metaverse. Holders will use your KEY to unlock all of our
				community one-off events /concerts / pop-ups, gain access to future
				drops (collections), be a part of the future of the community, and
				signal to others that you are part of Gen X – taking up space in the
				Metaverse.{' '}
			</p>
			<div className="imgColumn">
				<img src={roller} alt="Skate roller" />
				<img src={pizza} alt="Pizza" />
			</div>
		</div>
	);
}
