import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

createRoot(window.App).render((
	<Provider store={store}>
		<App />
	</Provider>
));
