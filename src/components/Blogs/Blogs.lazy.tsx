import React, { lazy, Suspense } from 'react';

const LazyBlogs = lazy(() => import('./Blogs'));

const Blogs = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBlogs {...props} />
  </Suspense>
);

export default Blogs;
