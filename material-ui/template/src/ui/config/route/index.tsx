import { createBrowserRouter } from 'react-router-dom';

import { ProtectionRouteProvider } from './protect';
import { PublicRouteProvider } from './public';
export const router = createBrowserRouter([
  ...PublicRouteProvider,
  ...ProtectionRouteProvider,
  {
    path: '*',
    element: 'Not Found',
  },
]);
