import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import { Home, SignupPage, LoginPage } from 'components/pages';
import { Header } from 'components/sections';

export const AppRoutes = () => (
	<BrowserRouter>
		<Header />
		<Container maxWidth="lg" sx={{ marginTop: '25px' }}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<SignupPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</Container>
	</BrowserRouter>
);
