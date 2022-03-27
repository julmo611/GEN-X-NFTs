import React from 'react';
import greenGhost from '../assets/ghost-green-dots.png';
import blueGhost from '../assets/ghost-blue-dots.png';
import redGhost from '../assets/ghost-red-dots.png';
import orangeGhost from '../assets/ghost-orange-dots.png';
import cherries from '../assets/cherries-dots.png';
import pacMan from '../assets/pac-man-dots.png';

export default function RoadMap() {
	return (
		<div className="roadMap" id="roadmap">
			<div className="boxTitle">
				<h2>The Roadmap</h2>
				<p>
					Gen Xers hate rules and hand holding – we like to do stuff our own
					way. Nonetheless, here’s a Roadmap (it’s like Mapquest – it tells you
					step-by-step where we want to take this project).
				</p>
			</div>
			<div className="roadMapContainer">
				<div className="divOne">
					<h2>PRE-DROP</h2>
					<div className="textCont">
						<p>Join the Community! Join the Pre-Sale list!</p>
					</div>
					<div className="imgCont">
						<img src={greenGhost} alt="pac-man ghost" />
					</div>
				</div>
				<div className="divTwo">
					<h2>PRE-SALE - DATE TBD</h2>
					<div className="imgCont">
						<img src={blueGhost} alt="pac-man ghost" />
					</div>
					<div className="textCont">
						<p>
							Early MINT access for people on the Pre-Sale list to buy up to 5
							Latchkey Kids NFTs at the lowest cost.
						</p>
					</div>
				</div>
				<div className="divThree">
					<h2>PUBLIC SALE - DATE TBD</h2>
					<div className="textCont">
						<p>
							25% OF COLLECTION MINTED (SOLD)PICTURE DAY! The Team will send a
							CUSTOM NFT PRINT to 25 randomly Selected Latchkey Kids holders.
						</p>
					</div>
					<div className="imgCont">
						<img src={redGhost} alt="pac-man ghost" />
					</div>
				</div>
				<div className="divFour">
					<h2>
						50% OF COLLECTION
						<br />
						MINTED (SOLD)
					</h2>
					<div className="imgCont">
						<img src={orangeGhost} alt="pac-man ghost" />
					</div>
					<div className="textCont">
						<p>
							MIX TAPE time! Our NFT holders vote on their fave Gen X music and
							the Team creates 50 custom MIX TAPES (that will be playable via
							laptop or smartphone) to send to 50 randomly selected Latchkey
							Kids holders.
						</p>
					</div>
				</div>
				<div className="divFive">
					<h2>
						75% OF COLLECTION
						<br />
						MINTED (SOLD)
					</h2>
					<div className="textCont">
						<p>
							YEARBOOK time! Our holders vote on all the class of sold Latchkey
							Kids for Best Hair, Most Likely to Succeed, Class Clown, etc. and
							then 75 randomly selected NFT holders get a printed CUSTOM
							YEARBOOK mailed to them!
						</p>
					</div>
					<div className="imgCont">
						<img src={cherries} alt="cherries" />
					</div>
				</div>
				<div className="divSix">
					<h2>
						100% OF COLLECTION
						<br />
						MINTED (SOLD)
					</h2>
					<div className="imgCont">
						<img src={pacMan} alt="Pac-Man" />
					</div>
					<div className="textCont">
						<p>
							GRADUATION NIGHT! It’s time to PARTY! And, also, where we DONATE
							10% of the Primary sales profits to a Gen X approved organization
							to do some good in this crazy world The Team, together with our
							Discord Community, will decide on who gets the moolah.
						</p>
					</div>
				</div>
				<div className="postDrop">
					<h2>
						POST-DROP / <br />
						ROADMAP 2.0
					</h2>
					<div className="pdCont">
						<p>
							<strong>POP UP EVENTS + METAVERSE HANGOUTS:</strong> Our goal is
							to build a community hangout/event space both IRL (in real life)
							and for your NFT avatar, where we can gather for our own Latchkey
							Kids Community gatherings, as well as rent it out to other holders
							for their own fun pop-ups. We plan to host epic ragers for our
							peeps (think concerts from throwback hair bands and new wave acts,
							pop-up video game arcades, coffee house meetups complete with
							sensitive/moody acoustic singer songwriters, etc.)
						</p>
						<p>
							<strong>MERCH STORE:</strong> Your place IRL and online to snag
							cool retro swag to show off your goats (and holders will get
							special perks and discounts).
						</p>
						<p>
							<strong>
								SATURDAY MORNING CARTOONS + AFTER SCHOOL SPECIALS:
							</strong>{' '}
							The Team begins development on a Saturday Morning Cartoon and/or
							After School Special based on certain Latchkey Kids characters –
							where the holders of those goats actually get paid royalties if we
							cast your kid!
						</p>
						<p>
							<strong>FUTURE GENXNFT COLLECTIONS:</strong> As a part of the
							GENXNFTS community, you will be first in line for all OTHER
							GENXNFTS PROJECTS we develop and release in the future.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
