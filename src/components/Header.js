import React from 'react';
import headerImg from '../assets/header-logo.png';
import cassette from '../assets/cassette.png';
import nftOne from '../assets/nft1.png';
import nftTwo from '../assets/nft2.png';
import stereo from '../assets/90sStereo.png';

export default function Header() {
	return (
		<div className="header" id="start">
			<img src={headerImg} alt="Gen X NFT COllection" className="headerImg" />
			<div className="headerContainer">
				<div className="imgBox">
					<img src={cassette} alt="Cassette" className="cassette" />
					<img src={nftTwo} alt="NFT" />
				</div>
				<div className="textCont" id="story">
					<p>
						Listen up. We can do this the easy way or the hard way. NFTs are
						here to stay. Web3 is a real thing. The Metaverse is coming. And it
						doesn't care about you. It's made for people who were weaned on
						social media.
					</p>
					<p>
						Kids who got smartphones at age 10. Kids who understand Discord.
						Kids who KNOW what Discord is. That’s not us. We are not those kids.
						We were raised by MTV. We walked ourselves home from school. We
						didn’t have anyone waiting for us. We were Latchkey Kids.
					</p>
					<p>
						Let's embrace the identity that defined our generation and show the
						Metaverse who the real grown-ups in the room are. We are Gen X.
					</p>
					<p>This is our NFT.</p>
				</div>
				<div className="imgBox">
					<img src={nftOne} alt="NFT" />
					<img src={stereo} alt="Stereo" className="stereo" />
				</div>
			</div>
		</div>
	);
}
