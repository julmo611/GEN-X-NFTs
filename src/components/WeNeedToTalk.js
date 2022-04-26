import React from 'react';
import wntImage from '../assets/wntak.png';
import yearBook from '../assets/yearBook.jpg';

export default function WeNeedToTalk() {
	return (
		<div className="wntt">
			<div className="ringImage">
				<img src={wntImage} alt="ring" />
			</div>
			<h2>We need to talk about the kids</h2>
			<div className="wnttCont">
				<p>
					This is a generative 3,000 NFT collection, where each Latchkey Kid NFT
					has aunique combination of multiple, age appropriate and fun assets
					and traits. The one you get when you mint will be randomly selected
					and revealed shortly after.
				</p>
				<p>
					Peppered in the mix throughout the drop (collection) are some
					completely hand drawn 1:1 (one of a kind) Latchkey Kids that are
					throwbacks to our youth in the RADDEST of ways – and these will be
					SUPER RARE. Anyone can get one in the drop for the same cost.
				</p>
				<p>
					So, whether you were a brain... an athlete... a basket case...a
					princess...or a criminal – there is a Latchkey Kid out there that’s
					just for you.
				</p>
			</div>
			<img src={yearBook} alt="Art" className="yearBook" />
		</div>
	);
}
