import { Provider } from 'react-redux';
import store from 'redux-store/store';

export const App = () => (
	<Provider store={store}>
		<h1>App</h1>
	</Provider>
);
