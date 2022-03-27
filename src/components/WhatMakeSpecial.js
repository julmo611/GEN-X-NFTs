import React from 'react';
import glasses from '../assets/glasses.png';

export default function WhatMakeSpecial() {
	return (
		<div className="wmSpecial">
			<div className="wmHeader">
				<h2>
					What makes this
					<br />
					project special
				</h2>
				<img src={glasses} alt="Glasses" />
			</div>
			<div className="wmSpecialCont">
				<p>
					<strong>AFFORDABILITY:</strong> We will be coming in at a VERY
					affordable mint price. Less than a pair of Doc Martens. We want ANYONE
					who wants one to be able to experience the thrill of buying a Latchkey
					Kid.
				</p>
				<p>
					<strong>TWO WAYS TO BUY:</strong> You can mint a Latchkey Kid using a
					Crypto Wallet OR by using a Credit Card! This is HUGE. Most NFTs don’t
					offer a Credit Card option, and the reality is that some folks just
					don’t yet get the process of setting up and funding a crypto wallet.
					We made the decision early to wait to mint until we can seamlessly
					sell these NFTs via Credit Card so the process can be easy breezy –
					even a slacker can do it.
				</p>
				<p>
					<strong>PRE-LAUNCH UTILITY:</strong> Unlike most other NFTs (that only
					offer utility / perks once you BUY them), Latchkey Kids NFTs will help
					you out BEFORE hand, with education through ongoing video TUTORIALS.
				</p>
				<p>For example: – How to safely and securely set up a crypto wallet</p>
				<p>
					– Walking you through the process to buy and swap crypto with your
					wallet to get what you need, and where, to actually buy NFTs
				</p>
				<p>
					– Understanding the PRE-MINT process (what IS a mint? What IS a
					Pre-Sale list? Why are they important? Why do you want to get in on
					one? And HOW? If you’re a part of the Latchkey Kids community, you
					WILL be a part of the EARLY launch and have access to MINT an NFT
					before its open to the PUBLIC)
				</p>
				<p>
					– How to navigate Discord (this is the CALCULUS of NFTs, the hardest
					class you will take. Discord is where you currently need to be to take
					part in any NFT community and learn all the ins and outs of the
					project. I want to help you learn and understand Discord in my own
					server, so you can then fly off and join other servers and know
					exactly what to do, how to navigate and how to thrive there)
				</p>
				<p>
					<strong>INCLUSIVITY:</strong> The plan with this collection isn’t just
					about selling it to Gen Xers – it’s also about finding ways to help
					moms, women, and all under-represented folks in the entire NFT space
					benefit. We’ll constantly be looking out for ways to turn our holders
					onto other cool collections we find, and help support worthy people in
					the process.
				</p>
				<p>
					<strong>OTHER BONUSES:</strong> Through it all, we will also always be
					looking for innovative ways to provide value to our holders and
					community – such as chances to win other NFTs from the Latchkey Kids
					wallet, pre-sale spots for other RAD projects we collab with, even
					Cameo shout outs from your favorite 80s icons.{' '}
				</p>
			</div>
		</div>
	);
}
