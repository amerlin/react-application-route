import React from 'react';
import ReactDOM from 'react-dom';
import Box3 from './Box3';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Box3 />, div);
  ReactDOM.unmountComponentAtNode(div);
});