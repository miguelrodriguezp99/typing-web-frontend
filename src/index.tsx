import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChartComp from './components/Chart/Chart';
import Layout from './components/Layout';
import AuthForm from './components/AuthForm/AuthForm';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(


  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path='/chart' element={<ChartComp />} />
        <Route path='/login' element={<AuthForm />} />
      </Routes>
    </Layout>
  </BrowserRouter>


);

