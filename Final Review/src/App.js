import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Front from './Front';
import './App.css';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Front/>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
