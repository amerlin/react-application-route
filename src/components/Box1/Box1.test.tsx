import React from 'react';
import ReactDOM from 'react-dom';
import Box1 from './Box1';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Box1 />, div);
  ReactDOM.unmountComponentAtNode(div);
});