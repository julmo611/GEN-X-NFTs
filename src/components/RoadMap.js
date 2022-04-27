import React from 'react';
import greenGhost from '../assets/ghost-green-dots.png';
import blueGhost from '../assets/ghost-blue-dots.png';
import redGhost from '../assets/ghost-red-dots.png';
import orangeGhost from '../assets/ghost-orange-dots.png';
import cherries from '../assets/cherries-dots.png';
import pacMan from '../assets/pac-man-dots.png';
import green from '../assets/ghost-green.png';
import blue from '../assets/ghost-blue.png';
import red from '../assets/ghost-red.png';
import orange from '../assets/ghost-orange.png';
import cherriesM from '../assets/cherries.png';
import pacManM from '../assets/pac-man.png';
import arcade from '../assets/arcade.png';
import cassette2 from '../assets/cassette-2.png';
import yearBook from '../assets/yearBook.jpg';

export default function RoadMap() {
	return (
		<div className="roadMap" id="roadmap">
			<img src={arcade} alt="Arcade" className="arcadeIcon" />
			<div className="boxTitle">
				<h2>Roadmap</h2>
				<p>
					Gen-Xers hate rules and hand holding – we like to do stuff our own
					way. Nonetheless, here’s a Roadmap (it’s like Mapquest – it tells you
					step-by-step where we want to take this project).
				</p>
			</div>
			<div className="roadMapContainer">
				<div className="divOne">
					<h2>PRE-SALE - DATE TBD</h2>
					<div className="textCont">
						<p>
							Early supporters on the Pre-Sale list get access to buy{' '}
							<i>Latchkey Kids NFTs</i> at the lowest cost, BEFORE anyone else –
							using a Credit Card or Crypto Wallet.
						</p>
						<p>
							You can
							<a
								href="https://docs.google.com/forms/d/e/1FAIpQLSdwJzUDJw8R-Y_Vcx2is1zzevHhjQ4X-OREGUO62j3IKgZksw/viewform"
								target="_blank"
								rel="noopener noreferrer"
							>
								{' '}
								CLICK HERE
							</a>{' '}
							to sign up for the Pre-Sale List now!
						</p>
					</div>
					<div className="imgCont">
						<img src={greenGhost} alt="pac-man ghost" />
					</div>
					<img src={green} alt="pac-man ghost" className="ghostMobile" />
				</div>
				<div className="divTwo">
					<h2>PUBLIC SALE – DATE TBD</h2>
					<div className="imgCont">
						<img src={blueGhost} alt="pac-man ghost" />
					</div>
					<div className="textCont">
						<p>
							The Public Sale opens it up to everyone who wants to purchase{' '}
							<i>Latchkey Kids</i> NFTs – again, using either a Credit Card or
							Crypto Wallet.
						</p>
					</div>
					<img src={blue} alt="pac-man ghost" className="ghostMobile" />
				</div>
				<div className="divThree">
					<h2>REVEAL / RARITY</h2>
					<div className="textCont">
						<p>
							When you mint a <i>Latchkey Kids</i> NFT in the Pre-Sale or Public
							Sale, yours will be randomly selected but we don’t reveal which
							one you got right away. Shortly after the Public Sale, we’ll have
							a big party online, when we’ll reveal the ACTUAL{' '}
							<i>Latchkey Kids</i> NFTs that everyone got in the random mint –
							so you can admire the specific attributes and traits that make
							your goat(s) special and one-of-a-kind.
						</p>
						<p>
							The rarity of the attributes and traits of the{' '}
							<i>Latchkey Kids</i> NFT collection (e.g., what % out of all of
							the NFTs in the entire collection have each individual asset /
							trait) will also be revealed to the Community around that time.
						</p>
					</div>
					<div className="imgCont">
						<img src={redGhost} alt="pac-man ghost" />
					</div>
					<img src={red} alt="pac-man ghost" className="ghostMobile" />
				</div>
				<div className="divFour">
					<h2>
						25% MINTED (SOLD)
						<br />
						PICTURE DAY!
					</h2>
					<div className="imgCont">
						<img src={orangeGhost} alt="pac-man ghost" />
					</div>
					<div className="textCont">
						<p>
							The GEN-X NFT Team will gift Custom NFT Prints or Digital Art
							Frames at random to holders to display their <i>Latchkey Kids</i>{' '}
							IRL (in real life) in their homes.
						</p>
					</div>
					<img src={orange} alt="pac-man ghost" className="ghostMobile" />
				</div>
				<div className="divFive">
					<h2>
						<span className="cassette">
							<img src={cassette2} alt="Cassette" />
						</span>
						50% MINTED (SOLD)
						<br />
						MIX TAPE TIME!
					</h2>
					<div className="textCont">
						<p>
							GEN-X NFT holders vote on their favorite Gen-X music for a DJ to
							create Custom Digital MIX TAPES (that will be playable via a
							device that plugs into a laptop or can be played on a smartphone)
							to send to randomly selected <i>Latchkey Kids</i> NFT holders.
						</p>
					</div>
					<div className="imgCont">
						<img src={cherries} alt="cherries" />
					</div>
					<img src={cherriesM} alt="cherries" className="ghostMobile" />
				</div>
				<div className="divSix">
					<h2>
						75% MINTED (SOLD)
						<br />
						YEARBOOK DAY!
					</h2>
					<div className="imgCont">
						<img src={pacMan} alt="Pac-Man" />
					</div>
					<div className="textCont">
						<p>
							GEN-X NFT holders will vote on their class of NFTs for Best Hair,
							Most Likely to Succeed, Class Clown, Biggest Flirt, etc., and
							randomly selected <i>Latchkey Kids</i> NFT holders will receive a
							<i>LATCHKEY KIDS</i> YEARBOOK in the mail.
						</p>
						<div className="yearBookBox">
							<img src={yearBook} alt="Art" className="yearBook" />
						</div>
					</div>
					<img src={pacManM} alt="Pac-Man" className="ghostMobile" />
				</div>
				<div className="postDrop">
					<h2>
						100% MINTED (SOLD) <br />
						GRADUATION NIGHT!
					</h2>
					<div className="pdCont">
						<p>
							It’s time to PARTY! We intend to host an event where all{' '}
							<i>Latchkey Kids</i> NFT holders can come together and celebrate
							with surprise guests! We will be gifting merch and swag all night
							– including other rad NFTs from our private collection!
						</p>
					</div>
				</div>
				<div className="postDrop">
					<h2>SOCIAL RESPONSIBILITY</h2>
					<div className="pdCont">
						<p>
							Even cooler – now that all the NFTs have been sold, we will DONATE
							10% of our primary sales profits to a Gen-X approved organization
							to do some good in the world. The Team, together with our
							Community will decide on who this will be. Plus, on an ongoing
							basis we’ll KEEP DONATING 10% of all of the resale royalties we
							get from secondary market sales of our NFTs to social good
							organizations/projects selected by the Team and the Community.
						</p>
					</div>
					<h2>
						POST-MINT
						<br />
						ROADMAP 2.0 LAUNCHES!
					</h2>
					<div className="pdCont">
						<p>We hope to deliver:</p>
						<p>
							<strong>POP UP EVENTS + METAVERSE HANGOUTS:</strong> Our goal is
							to build a community hangout/event space both IRL (in real life)
							and in the Metaverse, where we will host Gen-X NFTs Community
							gatherings. Think CONCERTS from retro hair metal, new wave, pop,
							grunge, alternative, and rap artists, pop-up VIDEO GAME ARCADES,
							outdoor MOVIE NIGHTS, and COFFEE HOUSE meetups, complete with
							acoustic singer songwriters! We’ve already bought the virtual real
							estate.
						</p>
						<p>
							<strong>MERCH STORE:</strong> This is your place to snag cool
							Gen-X NFT SWAG – including t-shirts, hats, stickers, buttons,
							scrunchies and socks. All holders will get special perks,
							giveaways and discounts.
						</p>
						<p>
							<strong>SATURDAY MORNING CARTOON:</strong> The Team begins
							development on a Saturday Morning Cartoon based on certain
							<i>Latchkey Kids</i> characters – where the holders of those
							character NFTs get paid royalties (a share) from the money we get
							if we cast your kid!
						</p>
						<p>
							<strong>FUTURE GEN-X NFT COLLECTIONS:</strong> As a part of the
							Gen-X NFTS community, you will be first in line for ALL OTHER
							GEN-X NFTS PROJECTS we develop and release in the future.
						</p>
						<p>
							<strong>OTHER BONUSES:</strong> Through it all, we will also
							always be looking for innovative ways to provide value to our
							holders and community – such as chances to win other NFTs from
							cool collections, pre-sale slots for other rad projects we collab
							with, even Cameo shout outs from your favorite Gen-X icons.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
