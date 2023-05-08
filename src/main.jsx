import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import store from './app/store';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
	<MantineProvider>
		<Provider store={store}>
			<App />
		</Provider>
	</MantineProvider>
);
