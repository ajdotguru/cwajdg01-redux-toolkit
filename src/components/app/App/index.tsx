import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import { Provider } from 'react-redux';
import store from 'redux-store/store';
import { AppRoutes } from 'components/app';
import { Header } from 'components/sections';
import { theme } from './theme';

export const App = () => (
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<Container maxWidth="lg" sx={{ marginTop: '25px' }}>
				<AppRoutes />
			</Container>
		</ThemeProvider>
	</Provider>
);
