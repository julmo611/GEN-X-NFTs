import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import OfficialRules from './Pages/OfficialRules';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsAndConditions from './Pages/TermsAndConditions';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
			<Route path="/terms-and-conditions" element={<TermsAndConditions />} />
			<Route path="/official-rules" element={<OfficialRules />} />
		</Routes>
	);
}

export default App;
