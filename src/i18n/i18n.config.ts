import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './en';
import es from './es';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		debug: true,
		interpolation: {
			escapeValue: false
		},
		detection: {
			order: ['querystring', 'cookie', 'localStorage', 'navigator'],
			lookupQuerystring: 'lng',
			lookupCookie: 'i18n',
			lookupLocalStorage: 'i18n',
			lookupFromPathIndex: 0,
			lookupFromSubdomainIndex: 0,
			caches: ['localStorage', 'cookie']
		},
		resources: { en, es }
	});

export default i18n;
