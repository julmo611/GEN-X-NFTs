import React from 'react';
import headerImg from '../assets/header-logo.png';
import cassette from '../assets/cassette.png';
import nftOne from '../assets/nft1.png';
import nftTwo from '../assets/nft2.png';
import stereo from '../assets/90sStereo.png';

export default function Header() {
	return (
		<div className="header">
			<img src={headerImg} alt="Gen X NFT COllection" className="headerImg" />

			<div className="headerContainer">
				<div className="imgBox">
					<img src={cassette} alt="Cassette" className="cassette" />
					<img src={nftTwo} alt="NFT" />
				</div>
				<div className="textCont" id="about">
					<h2>About the NFTs</h2>
					<p>
						Listen up.
						<br />
						We can do this the easy way or the hard way.
						<br />
						Web3 is a real thing. NFTs are here to stay.
						<br />
						The Metaverse is coming. And it doesn't care about you.
						<br />
						It's made for people who were weaned on social media.
					</p>
					<p>
						Kids who got smartphones at age 10.
						<br />
						Kids who understand Discord.
						<br />
						That’s not us. We are not those kids.
					</p>
					<p>
						We were raised by MTV.
						<br />
						We walked ourselves home from school.
						<br />
						We didn’t have anyone waiting for us.
						<br />
						We were Latchkey Kids.
					</p>
					<p>
						Let's embrace the identity that defined our generation and show the
						Metaverse who the real grown-ups in the room are.
						<br />
						We are Gen-X.
						<br />
						This is our NFT.
					</p>
				</div>
				<div className="imgBox">
					<img src={nftOne} alt="NFT" />
					<img src={stereo} alt="Stereo" className="stereo" />
				</div>
			</div>
		</div>
	);
}
