import React from 'react';
import ReactDOM from 'react-dom';
import Blogs from './Blogs';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Blogs />, div);
  ReactDOM.unmountComponentAtNode(div);
});