// Disini kita akan buat halaman yang berlayer / berlapis

import React from 'react';

import { Routes, Route } from "react-router-dom";
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';

const MainApp = () => {
  return (
    <div>
        <p>Header</p>
        <Routes>
            <Route path="/create-blog" element={<CreateBlog />} />
            <Route path="/detail-blog" element={<DetailBlog />} />
            <Route path="/" element={<Home />} />
        </Routes>
        <p>Footer</p>
    </div>
  )
}

export default MainApp;
