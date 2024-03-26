import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Box from './components/Box/Box';
import Box1 from './components/Box1/Box1';
import Blogs from './components/Blogs/Blogs';
import NoPage from './components/NoPage/NoPage';
import Layout from './components/Layout/Layout';
import Box3 from './components/Box3/Box3';
import Layout1 from './components/Layout1/Layout1';

function App() {
  return (
    <div className="App">
      <h2>Route Application Test</h2>

      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Box />} />
            <Route path="box1" element={<Box1 />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route element={<Layout1 />}>
            <Route path="box3" element={<Box3 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
