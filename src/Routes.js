import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import Category from './pages/Category';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="/category/:category" element={<Category />} />
    </Routes>
  );
}

export default AppRoutes;