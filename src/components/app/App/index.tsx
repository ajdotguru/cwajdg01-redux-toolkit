import { Provider } from 'react-redux';
import store from 'redux-store/store';
import { Home } from 'components/pages';

export const App = () => (
	<Provider store={store}>
		<Home />
	</Provider>
);
