import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from '@router/routes';
import { RouteType } from '@router/route.interface';
const Router = () => {
	return (
		<Suspense fallback={<span>Loading....</span>}>
			<BrowserRouter>
					<Switch>
						{routes.safeRoutes.map((route: RouteType, i) => (
							<Route
								key={i}
								path={route.path}
								exact={route.exact}
								component={route.component}
							></Route>
						))}
						{routes.unsafeRoutes.map((route: RouteType, i) => (
							<Route
								key={i}
								path={route.path}
								component={route.component}
							></Route>
						))}
					</Switch>
			</BrowserRouter>
		</Suspense>
	);
};

export default Router;
