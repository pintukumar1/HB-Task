import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Products />}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="/cart" element={<h1>Cart</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;
