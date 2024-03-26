import React, { FC } from 'react';
import styles from './Blogs.module.css';
import { Link } from 'react-router-dom';

interface BlogsProps { }

const Blogs: FC<BlogsProps> = () => {
  return (
    <div className={styles.Blogs}>
      Blogs Component
    </div>
  );
}

export default Blogs;
