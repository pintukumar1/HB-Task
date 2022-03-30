import { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import AuthContext from "./context/auth-context"
import Navigation from './components/Navigation/Navigation';
import { useNavigate } from 'react-router-dom'

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
            <Route path="/" element={<Auth />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productid" element={<ProductDetail />} />
            <Route path="/cart" element={<h1>Cart</h1>} />
          </Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
