import { lazy } from 'react';
import { RoutesType } from '@router/route.interface';

const Dashboard = lazy(() => import('@components/dashboard/Dashboard'));
import Error404 from '@components/errors/Error404';

const routes: RoutesType = {
	safeRoutes: [
		{
			path: '/',
			name: 'Dashboard',
			component: Dashboard,
			exact: true
		}
	],
	unsafeRoutes: [
		{
			path: '*',
			name: '404',
			component: Error404,
			exact: true
		}
	]
};

export default routes;
