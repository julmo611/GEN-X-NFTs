import React from 'react';
import adila from '../assets/Adila-A.png';
import jc from '../assets/J-C-S.png';
import jesse from '../assets/Jesse-R.png';
import jess from '../assets/Jess-Z.png';
import micki from '../assets/Micki-B.png';
import rachel from '../assets/Rachel-L.png';
import sarahA from '../assets/Sarah-A.png';
import sarahM from '../assets/Sarah-M.png';

export default function Hello() {
	return (
		<div className="helloSection" id="team">
			<h2>The Team</h2>

			<div className="teamSection">
				<div className="teamBoxTop">
					<div className="teamBox">
						<img src={sarahM} alt="Latchkey Kids Team" />
						<p>
							<strong>Sarah M. (est. 1977)</strong>
							<br />
							Mom / Woman / Dog Person / Writer by day / Creator + Founder of
							Gen-X NFTs at every other moment I am not momming or sleeping
							<br />
							Twitter: @GENXNFTS
						</p>
					</div>
				</div>
				<div className="teamBox">
					<img src={jesse} alt="Latchkey Kids Team" />
					<p>
						<strong>Jesse R. (est. 1975)</strong>
						<br />
						Dad / Also a Dog Person / Coach by day / Business Affairs + Advisor
						to Gen-X NFTS
					</p>
				</div>
				<div className="teamBox">
					<img src={adila} alt="Latchkey Kids Team" />
					<p>
						<strong>Adila A. (est. 1998)</strong>
						<br />
						Honorary Gen-Xer / Artist of the Latchkey Kids collection
					</p>
				</div>
				<div className="teamBox">
					<img src={rachel} alt="Latchkey Kids Team" />
					<p>
						<strong>Rachel L. (est. 1975)</strong>
						<br />
						Mom / Minnesotan / Tech Guru + Advisor to Gen-X NFTS
					</p>
				</div>
				<div className="teamBox">
					<img src={micki} alt="Latchkey Kids Team" />
					<p>
						<strong>Micki B. (est. 1974)</strong>
						<br />
						Mom / New Yorker / Marketing Guru + Advisor to Gen-X NFTS
					</p>
				</div>
				<div className="teamBox">
					<img src={jc} alt="Latchkey Kids Team" />
					<p>
						<strong>J.C. S. (est. 1974)</strong>
						<br />
						Cool Dad / PR Guru + Advisor to Gen-X NFTS
					</p>
				</div>
				<div className="teamBox">
					<img src={jess} alt="Latchkey Kids Team" />
					<p>
						<strong>Jess Z. (est. 1976)</strong>
						<br />
						Mom / New Yorker / Biz Dev Goddess + Advisor to Gen-X NFTS
					</p>
				</div>
				<div className="teamBox">
					<img src={sarahA} alt="Latchkey Kids Team" />
					<p>
						<strong>Sarah A. (est. 1976) </strong>
						<br />
						Dog Mom / Somatic Therapist / Mental Health Advisor to Gen-X NFTS
						<br />
						Instagram: @sarahthesomatictherapist
					</p>
				</div>
			</div>
		</div>
	);
}
