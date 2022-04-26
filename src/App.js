import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import OficialRules from './Pages/OficialRules';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsAndConditions from './Pages/TermsAndConditions';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
			<Route path="/terms-and-conditions" element={<TermsAndConditions />} />
			<Route path="/oficial-rules" element={<OficialRules />} />
		</Routes>
	);
}

export default App;
