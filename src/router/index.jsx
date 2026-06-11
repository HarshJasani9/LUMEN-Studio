import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '@/layouts/RootLayout';

const Home = lazy(() => import('@/pages/Home'));
const Work = lazy(() => import('@/pages/Work'));
const WorkDetail = lazy(() => import('@/pages/Work/[slug]'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const withSuspense = (Component) => (
  <Suspense fallback={<div className="min-h-screen bg-[var(--color-void)]" />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: withSuspense(NotFound),
    children: [
      { index: true, element: withSuspense(Home) },
      { path: 'work', element: withSuspense(Work) },
      { path: 'work/:slug', element: withSuspense(WorkDetail) },
      { path: 'about', element: withSuspense(About) },
      { path: 'services', element: withSuspense(Services) },
      { path: 'contact', element: withSuspense(Contact) },
      { path: '*', element: withSuspense(NotFound) },
    ],
  },
]);

export default router;
