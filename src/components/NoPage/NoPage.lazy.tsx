import React, { lazy, Suspense } from 'react';

const LazyNoPage = lazy(() => import('./NoPage'));

const NoPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNoPage {...props} />
  </Suspense>
);

export default NoPage;
