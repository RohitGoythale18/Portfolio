import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import HomeLayout from './components/HomeLayout';
import Home from './components/home/Home';
import AboutMe from './components/about/AboutMe';
import Resume from './components/resume/Resume';
import WhatIDid from './components/whatidid/WhatIDid';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<HomeLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/what-i-did' element={<WhatIDid />} />

      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
