import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header2 from '../Header2/Header2';

interface Layout1Props { }

const Layout1: FC<Layout1Props> = () => {
  return (
    <>
      <Header2 />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Outlet />
    </>
  )
};

export default Layout1;
