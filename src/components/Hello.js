import React from 'react';
import nftThree from '../assets/nft3.png';
import nftFour from '../assets/nft4.png';
import nftFive from '../assets/nft5.png';
import nftSix from '../assets/nft6.png';

export default function Hello() {
	return (
		<div className="helloSection" id="team">
			<h2>
				Hello! We are The
				<br /> Latchkey Kids Team
			</h2>
			<p>
				Since this collection is geared towards Gen Xers (read: newbies), here
				is a little NFT 101 lesson: you always want to be a part of an NFT
				community where the founders share their identity, and don't hide behind
				avatars. This is called being DOXXED. It's a very important thing in the
				NFT space. It means the people who are creating this community have
				nothing to hide!{' '}
			</p>
			<div className="teamSection">
				<div className="teamBox">
					<img src={nftThree} alt="Latchkey Kids Team" />
					<p>
						<strong>Sarah M. est 1977.</strong>
						<br />
						Mom / Woman / Dog Person / Currently living in Hawaii after a decade
						in CA / Writer by day / Creator + Founder of GENXNFTs at every other
						moment I am not momming, sleeping or working. Twitter: @GENXNFTS
					</p>
				</div>
				<div className="teamBox">
					<img src={nftFour} alt="Latchkey Kids Team" />
					<p>
						<strong>Jesse R. est 1975.</strong>
						<br />
						Husband of Sarah / Dad / Also a Dog Person / Coach by day / Business
						Affairs + Advisor to GENXNFTS
					</p>
				</div>
				<div className="teamBox">
					<img src={nftFive} alt="Latchkey Kids Team" />
					<p>
						<strong>Rachel L. est 1975.</strong>
						<br />
						Mom / Woman / Midwesterner / Tech Guru + Advisor to GENXNFTS
					</p>
				</div>
				<div className="teamBox">
					<img src={nftSix} alt="Latchkey Kids Team" />
					<p>
						<strong>Micki B. est 1975.</strong>
						<br />
						Mom / Woman / New Yorker / Marketing Guru + Advisor to GENXNFTS
					</p>
				</div>
			</div>
		</div>
	);
}
