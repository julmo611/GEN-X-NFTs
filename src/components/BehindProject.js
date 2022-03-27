import React from 'react';
import triangle from '../assets/pyramid.png';
import wow from '../assets/wow-img.png';

export default function BehindProject() {
	return (
		<div className="behindProject">
			<h2>Behind the project</h2>
			<div className="bpContainer">
				<p>
					Gen X – Web3 is not made for us. They want the youngs – Millennials,
					Gen Z, Gen A. Our kids... wait, my kid! That woke me up. If I don’t
					learn all about this stuff, how will I protect and educate my daughter
					in and about this world?{' '}
				</p>
				<p>
					So, I came up with an idea to create an NFT collection that will ease
					a reluctant generation into NFTs, so they, too, can have a voice – and
					hopefullybe a guide for the people they love.
				</p>
				<p>
					This collection starts out of the gate with up front utility in the
					form of education – you’ll learn everything from setting up your
					crypto wallet, to buying and swapping crypto, to actually minting
					NFTs. I'm gonna take it slow, 'cause this stuff can be complicated and
					not intuitive. I'm learning eachday, too.
				</p>
				<p>
					It would be such a shame for our generation to get left behind because
					the education isn’t there to help get us into this brand new tech
					space, so The Latchkey Kids are here to help break down the barriers
					to entry anyway we can.
				</p>
				<p>
					Plus, nostalgia is a powerful drug. Who wouldn’t want to venture back
					into simpler times with other likeminded kids who came of age in the
					late 70s/80s/ early 90s – and lived to tell about it?
				</p>
				<img src={triangle} alt="Pyramid" />
			</div>
			<div className="wowImg">
				<img src={wow} alt="WOW Emoji" />
			</div>
		</div>
	);
}
