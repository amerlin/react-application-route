import React, { lazy, Suspense } from 'react';

const LazyHeader2 = lazy(() => import('./Header2'));

const Header2 = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHeader2 {...props} />
  </Suspense>
);

export default Header2;
