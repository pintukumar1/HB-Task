import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../../context/auth-context';
import "./Navlinks.css"

const Navlinks = () => {
    const auth = useContext(AuthContext);
    return (
        <ul className="nav-links">
            {auth.isLoggedIn && (
                <li>
                    <NavLink to="/products"
                        className={({ isActive }) =>
                            isActive ? "active" : undefined
                        }>
                        ALL Products
                    </NavLink>
                </li>
            )}
            {!auth.isLoggedIn && (
                <li>
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "active" : undefined
                    }>AUTHENTICATE</NavLink>
                </li>
            )}
            {auth.isLoggedIn && (
                <li>
                    <button onClick={auth.logout}>LOGOUT</button>
                </li>
            )}
        </ul>
    )
}

export default Navlinks
