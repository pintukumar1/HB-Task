import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AppContext from '../../context/app-context';
import "./Navlinks.css"

const Navlinks = () => {
    const appCtx = useContext(AppContext);

    return (
        <ul className="nav-links">
            {appCtx.isLoggedIn && (
                <li>
                    <NavLink to="/products"
                        className={({ isActive }) =>
                            isActive ? "active" : undefined
                        }>
                        ALL PRODUCTS
                    </NavLink>
                </li>
            )}
            {appCtx.isLoggedIn && (
                <li>
                    <NavLink to="/cart" className={({ isActive }) =>
                        isActive ? "active" : undefined
                    }> CART
                    </NavLink>
                </li>
            )}
            {!appCtx.isLoggedIn && (
                <li>
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "active" : undefined
                    }>AUTHENTICATE</NavLink>
                </li>
            )}
            {appCtx.isLoggedIn && (
                <li>
                    <button
                        onClick={appCtx.logout}>
                        LOGOUT
                    </button>
                </li>
            )}
        </ul>
    )
}

export default Navlinks
