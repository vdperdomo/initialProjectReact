import { ComponentType } from 'react';

export interface RouteType {
	path: string;
	name: string;
	component: ComponentType;
	exact: boolean;
}

export interface RoutesType {
	safeRoutes: RouteType[];
	unsafeRoutes: RouteType[];
}
