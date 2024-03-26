import React, { lazy, Suspense } from 'react';

const LazyLayout1 = lazy(() => import('./Layout1'));

const Layout1 = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLayout1 {...props} />
  </Suspense>
);

export default Layout1;
