import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from 'components/pages';

export const AppRoutes = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	</BrowserRouter>
);
