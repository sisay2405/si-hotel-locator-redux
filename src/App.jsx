import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './components/Home';
import HotelDetail from './Pages/HotelDetail';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <Routes >
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} /> 
        <Route path="HotelDetail" exact element={<HotelDetail/>} />
        <Route path="HotelDetail/:id" element={<HotelDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
export default App;


