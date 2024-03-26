import React, { FC } from 'react';
import styles from './Box1.module.css';

interface Box1Props { }

const Box1: FC<Box1Props> = () => {
  return (
    <div className={styles.Box1}>
      Box1 Component
    </div>
  )
};

export default Box1;
