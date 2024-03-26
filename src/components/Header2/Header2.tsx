import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Header2Props { }

const Header2: FC<Header2Props> = () => {
  return (
    <>
      <h4>Header2</h4>
      <Link to="/Box1">Box1</Link><br></br>
      <Link to="/blogs">Blogs</Link><br></br>
      <Link to="/Box3">Box3</Link><br></br>
      <a href="/">Reload link</a>
    </>
  )
};

export default Header2;
