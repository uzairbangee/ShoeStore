import React from 'react';
import Header from './Components/Header/Header.component';
import ProductPage from './Components/ProductPage/ProductPage';
import Products from './Components/Cards/Cards.components';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Products />}/>
            <Route path="catalog/:slug" exact element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
