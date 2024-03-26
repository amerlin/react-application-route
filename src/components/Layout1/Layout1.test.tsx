import React from 'react';
import ReactDOM from 'react-dom';
import Layout1 from './Layout1';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Layout1 />, div);
  ReactDOM.unmountComponentAtNode(div);
});