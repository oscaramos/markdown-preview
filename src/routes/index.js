import { asyncComponentLoader } from 'utils';

const routes = [
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/Welcome')),
    path: '/',
  },
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/Page1')),
    path: '/page-1/:docId',
  },
  {
    component: asyncComponentLoader(_ => import('components/NotFound')),
  },
];

export default routes;
