// Disini kita akan buat halaman yang berlayer / berlapis

import React from 'react';
import './mainApp.scss';

import { Routes, Route } from "react-router-dom";
import { Footer, Header } from '../../component';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';

const MainApp = () => {
  return (
    <div className='main-app-wrapper'>
          <Header />
        <div className='content-wrapper'>
          <Routes>
              <Route path="/create-blog" element={<CreateBlog />} />
              <Route path="/detail-blog" element={<DetailBlog />} />
              <Route path="/" element={<Home />} />
          </Routes>
        </div>
          <Footer />
    </div>
  )
}

export default MainApp;
