import React, { FC } from 'react';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

interface LayoutProps { }

const Layout: FC<LayoutProps> = () => {
  return (
    <div className={styles.Layout}>
      <Header />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Outlet />
    </div>
  )
};

export default Layout;
