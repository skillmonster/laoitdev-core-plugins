import { RouteObject } from 'react-router-dom';
import LayoutContainer from 'ui/containers/LayoutContainer';

export const PublicRouteProvider: RouteObject[] = [
  {
    path: '/',
    element: <LayoutContainer />,
    children: [],
  },
];
