import React from 'react';
import Router from '@router/Router';
import styles from '@components/App.module.scss';
import { useTranslation } from 'react-i18next';

function App() {
	const { i18n } = useTranslation('onboarding');
	return (
		<React.Fragment>
			<button className={styles.btn} onClick={() => i18n.changeLanguage('en')}>
				en
			</button>
			<button className={styles.btn} onClick={() => i18n.changeLanguage('es')}>
				es
			</button>
			<Router></Router>
		</React.Fragment>
	);
}

export default App;
