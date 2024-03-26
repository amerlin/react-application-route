import React, { lazy, Suspense } from 'react';

const LazyBox1 = lazy(() => import('./Box1'));

const Box1 = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBox1 {...props} />
  </Suspense>
);

export default Box1;
