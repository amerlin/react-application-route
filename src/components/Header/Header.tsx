import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps { }

const Header: FC<HeaderProps> = () => {

  const today = new Date();

  return (
    <>
      <h4>Header1</h4>
      {today.toString()}
      <br></br>
      <Link to="/Box1">Box1</Link><br></br>
      <Link to="/blogs">Blogs</Link><br></br>
      <Link to="/Box3">Box3</Link><br></br>
      <a href="/">Reload link</a>
    </>
  );
}

export default Header;
