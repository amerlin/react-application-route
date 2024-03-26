import React, { FC } from 'react';
import styles from './NoPage.module.css';

interface NoPageProps {}

const NoPage: FC<NoPageProps> = () => (
  <div className={styles.NoPage}>
    NoPage Component
  </div>
);

export default NoPage;
