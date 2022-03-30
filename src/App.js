import { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth';
import ProductDetail from './components/Products/ProductDetail';
import Products from './pages/Products';
import AuthContext from "./context/auth-context"
import Navigation from './components/Navigation/Navigation';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginHandler = () => {
    setIsLoggedIn(true);
  }

  const logoutHandler = () => {
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      login: loginHandler,
      logout: logoutHandler
    }}>
      <Router >
        <Navigation/>
        <main className="content">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<h1>Cart</h1>} />
          </Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
