import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
	const { t } = useTranslation('dashboard');
	const history = useHistory();

	return <p>{t('title')}</p>;
};

export default Dashboard;
