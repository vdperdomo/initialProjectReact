import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import i18n from '@i18n/i18n.config';
import App from '@components/App';
import '@assets/styles/base.scss';

ReactDOM.render(
	<React.StrictMode>
		<I18nextProvider i18n={i18n}>
			<App />
		</I18nextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
