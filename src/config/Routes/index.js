import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { Login, MainApp, Register } from '../../pages';

const BaseRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainApp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default BaseRoutes;
