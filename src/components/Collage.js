import React from 'react';
import runDmc from '../assets/CELEBRITY-GOATS/Run-DMC.jpg';
import johnny from '../assets/CELEBRITY-GOATS/Johnny-from-Karate-Kid.jpg';
import punky from '../assets/CELEBRITY-GOATS/Punky-Brewster.jpg';
import slash from '../assets/CELEBRITY-GOATS/Slash.jpg';
import pee from '../assets/CELEBRITY-GOATS/Pee-Wee-Herman.jpg';
import venus from '../assets/CELEBRITY-GOATS/Venus-Williams.jpg';
import chunck from '../assets/CELEBRITY-GOATS/Chunk-From-Goonies.jpg';
import cher from '../assets/CELEBRITY-GOATS/Cher-from-Clueless.jpg';
import m1 from '../assets/MALE-GOATS/3.png';
import f1 from '../assets/FEMALE-GOATS/9.png';
import m2 from '../assets/MALE-GOATS/7.png';
import f2 from '../assets/FEMALE-GOATS/19.png';
import m3 from '../assets/MALE-GOATS/11.png';
import f3 from '../assets/FEMALE-GOATS/22.png';
import m4 from '../assets/MALE-GOATS/13.png';
import f4 from '../assets/FEMALE-GOATS/33.png';
import m5 from '../assets/MALE-GOATS/28.png';
import f5 from '../assets/FEMALE-GOATS/36.png';
// import m6 from '../assets/MALE-GOATS/31.png';
import f6 from '../assets/FEMALE-GOATS/39.png';
import m7 from '../assets/MALE-GOATS/66.png';
import f7 from '../assets/FEMALE-GOATS/51.png';
import m8 from '../assets/MALE-GOATS/67.png';
import f8 from '../assets/FEMALE-GOATS/63.png';
import m9 from '../assets/MALE-GOATS/75.png';
import f9 from '../assets/FEMALE-GOATS/64.png';
import m10 from '../assets/MALE-GOATS/178.png';
import f10 from '../assets/FEMALE-GOATS/65.png';
import m11 from '../assets/MALE-GOATS/338.png';

export default function Collage() {
	return (
		<div className="collageSection">
			<h2>What are GEN-X NFTS: THE Latchkey Kids Collection?</h2>
			<div className="goatsSamples">
				<img src={m1} alt="GEN-X NFTS" />
				<img src={f1} alt="GEN-X NFTS" />
				<img src={m2} alt="GEN-X NFTS" />
				<img src={f2} alt="GEN-X NFTS" />
				<img src={m3} alt="GEN-X NFTS" />
				<img src={f3} alt="GEN-X NFTS" />
				<img src={m4} alt="GEN-X NFTS" />
				<img src={f4} alt="GEN-X NFTS" />
				<img src={f5} alt="GEN-X NFTS" />
				<img src={m5} alt="GEN-X NFTS" />
				{/* <img src={m6} alt="GEN-X NFTS" /> */}
				<img src={f6} alt="GEN-X NFTS" />
				<img src={m7} alt="GEN-X NFTS" />
				<img src={f7} alt="GEN-X NFTS" />
				<img src={m8} alt="GEN-X NFTS" />
				<img src={f8} alt="GEN-X NFTS" />
				<img src={m9} alt="GEN-X NFTS" />
				<img src={f9} alt="GEN-X NFTS" />
				<img src={m10} alt="GEN-X NFTS" />
				<img src={f10} alt="GEN-X NFTS" />
				<img src={m11} alt="GEN-X NFTS" />
			</div>
			<p>
				This is a generative 3,000 NFT collection, where each{' '}
				<i>Latchkey Kids</i> NFT (Get it? Since “kids” are young goats!) has a
				unique combination of multiple, nostalgic and fun attributes / traits,
				including:
			</p>

			<p>
				<strong>Holding:</strong> Walkman, Yearbook, Etch-A-Sketch, Aqua NFT
				Spray, Magic 8-Ball, and more… <br />
				<strong>Wearing:</strong> Headphones, Swatch style Watch, Letterman
				Jacket, Bandana, Flannel Shirt, and more…
				<br />
				<strong>Rocking:</strong> Sunglasses, Popped Collar, Punk Choker, Side
				Pony Tail, Braces, Stubble, and more…
				<br />
				<strong>Expressing:</strong> Gen-X Indifference, Total Slacker, Goth
				Ennui, Punk Rage, Prep Pep, Grunge Malaise, and more…
			</p>

			<p>
				Peppered in the mix throughout the drop (collection) are some completely
				hand drawn 1:1 (one of a kind) <i>Latchkey Kids</i> that are throwbacks
				to our youth in the RADDEST of ways – and these will be SUPER RARE.
				Anyone can score one randomly in the drop for the same low cost. Here’s
				just a few:
			</p>
			<div className="celebrity">
				<img src={runDmc} alt="Celebrity Goat" />
				<img src={johnny} alt="Celebrity Goat" />
				<img src={punky} alt="Celebrity Goat" />
				<img src={slash} alt="Celebrity Goat" />
				<img src={pee} alt="Celebrity Goat" />
				<img src={venus} alt="Celebrity Goat" />
				<img src={chunck} alt="Celebrity Goat" />
				<img src={cher} alt="Celebrity Goat" />
			</div>
			<p>
				So, whether you were a brain... an athlete... a basket case...a
				princess...or a criminal – there’s a <i>Latchkey Kid</i> out there
				that’s just for you.
			</p>
		</div>
	);
}
