import React from 'react';
import ReactDOM from 'react-dom';
import Header2 from './Header2';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header2 />, div);
  ReactDOM.unmountComponentAtNode(div);
});