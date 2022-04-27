import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Mailchimp from '../components/Mailchimp';

export default function TermsAndConditions() {
	return (
		<div className="App overlayImage">
			<div className="specaialBackg">
				<Mailchimp />
				<div className="contentWrapEx">
					<Navigation />
					<h1>
						GEN-X NFTS: THE LATCHKEY KIDS COLLECTION – NFTS AND WEBSITE
						<br />
						TERMS AND CONDITIONS
					</h1>
					<div className="contentWrap"></div>
				</div>
				<Footer />
			</div>
		</div>
	);
}
