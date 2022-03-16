import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import FakePage from './components/FakePage';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <FakePage />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);