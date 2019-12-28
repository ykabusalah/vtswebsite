import React, { lazy, Suspense } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import Loader from '@iso/components/utility/loader';

const routes = [
  {
    path: '',
    component: lazy(() => import('../DashboardHomePage')),
    exact: true,
  },
  {
    path: 'eventsAnnouncements',
    component: lazy(() => import('../EventsAnnouncements/EventsAnnouncements')),
  },
  {
    path: 'pastEvents',
    component: lazy(() => import('../PastEvents/PastEvents')),
  },
  {
    path: 'questions',
    component: lazy(() => import('../Questions/Questions')),
  },
  {
    path: 'staff',
    component: lazy(() => import('../Staff/Staff')),
  },
  {
    path: 'resources',
    component: lazy(() => import('../Resources/Resources')),
  },
];

export default function AppRouter() {
  const { url } = useRouteMatch();
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route, idx) => (
          <Route exact={route.exact} key={idx} path={`${url}/${route.path}`}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
}
