import React from 'react';
// import roller from '../assets/skate-roller.png';
// import pizza from '../assets/pizza.png';
import key1 from '../assets/gold-key.png';
import key2 from '../assets/silver-key.png';
import key3 from '../assets/rainbow-key.png';
import key4 from '../assets/red-key.png';
import key5 from '../assets/rubick-key.png';
import key6 from '../assets/yellow-key.png';

export default function TheKey() {
	return (
		<div className="keySection">
			<div className="keybox">
				<img src={key1} alt="Key icon" className="keyIcon" />
				<img src={key2} alt="Key icon" className="keyIcon" />
				<img src={key3} alt="Key icon" className="keyIcon" />
				<img src={key4} alt="Key icon" className="keyIcon" />
				<img src={key5} alt="Key icon" className="keyIcon" />
				<img src={key6} alt="Key icon" className="keyIcon" />
			</div>
			<h2>What's with the key?</h2>
			<p>
				This is the hallmark identifying factor of every <i>Latchkey Kid.</i> It
				defined us. So, your NFT’s KEY will literally open doors for you IRL and
				in the Metaverse (we’ve already bought the virtual land). Holders will
				use their KEY to unlock all of our community one-off events / concerts /
				pop-ups, gain access to future drops (collections), be a part of the
				future of the community, and signal to others that you are part of Gen-X
				– taking up space in the Metaverse.
			</p>
			<p>
				Check out ROADMAP below to see some of the sweet perks of being a
				<i>Latchkey Kid</i> NFT holder.
			</p>
			{/* <div className="imgColumn">
				<img src={roller} alt="Skate roller" />
				<img src={pizza} alt="Pizza" />
			</div> */}
		</div>
	);
}
