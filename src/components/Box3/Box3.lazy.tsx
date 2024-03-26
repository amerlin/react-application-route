import React, { lazy, Suspense } from 'react';

const LazyBox3 = lazy(() => import('./Box3'));

const Box3 = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBox3 {...props} />
  </Suspense>
);

export default Box3;
