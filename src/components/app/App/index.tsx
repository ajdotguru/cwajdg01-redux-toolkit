import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { Provider } from 'react-redux';
import store from 'redux-store/store';
import { AppRoutes } from 'components/app';
import { theme } from './theme';

export const App = () => (
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppRoutes />
		</ThemeProvider>
	</Provider>
);
