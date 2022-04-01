import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Navigation from './components/Navigation/Navigation';
import Cart from './pages/Cart';
import AppContext from './context/app-context';

function App() {
  const appCtx = useContext(AppContext)
  
  useEffect(() => {
    appCtx.fetchAll()
  }, [])

  return (
    <Router >
      <Navigation />
      <main className="content">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productid" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
