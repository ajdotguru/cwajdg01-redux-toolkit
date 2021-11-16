import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, SignupPage } from 'components/pages';

export const AppRoutes = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/register" element={<SignupPage />} />
		</Routes>
	</BrowserRouter>
);
