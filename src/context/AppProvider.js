import React, { useReducer } from 'react'
import reducer from './reducer';
import AppContext from './app-context'
import {
    ADD_QTY,
    ADD_TO_CART,
    AUTH_LOGIN,
    AUTH_LOGOUT,
    FETCH_ALL_PRODUCTS,
    REMOVE_FROM_CART,
    SUBTRACT_QTY,
    UPDATE_QUERY,
} from './actions'

import axios from 'axios'

const defaultAppState = {
    isLoggedIn: false,
    products: [],
    currentQuery: "",
}

const AppProvider = (props) => {
    const [appState, dispatchAppAction] = useReducer(reducer, defaultAppState)

    const loginHandler = () => {
        dispatchAppAction({ type: AUTH_LOGIN })
    }

    const logoutHandler = () => {
        dispatchAppAction({ type: AUTH_LOGOUT })
    }

    const fetchAllProducts = () => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                let newArray = response.data.map(product => {
                    return { ...product, qty: 0, inCart: false }
                })
                dispatchAppAction({ type: FETCH_ALL_PRODUCTS, payload: newArray })
            })
    }

    const updateQuery = (query) => {
        dispatchAppAction({ type: UPDATE_QUERY, payload: query })
    }

    const addToCart = (id) => {
        dispatchAppAction({ type: ADD_TO_CART, payload: id })
    }

    const addQty = (id) => {
        dispatchAppAction({ type: ADD_QTY, payload: id })
    }

    const subtractQty = (id) => {
        dispatchAppAction({ type: SUBTRACT_QTY, payload: id })
    }

    const removeFromCart = (id) => {
        dispatchAppAction({ type: REMOVE_FROM_CART, payload: id })
    }

    const appContext = {
        isLoggedIn: appState.isLoggedIn,
        products: appState.products,
        currentQuery: appState.currentQuery,
        login: loginHandler,
        logout: logoutHandler,
        fetchAll: fetchAllProducts,
        searchItems: updateQuery,
        addToCart: addToCart,
        addQty: addQty,
        subtractQty: subtractQty,
        removeFromCart: removeFromCart
    };

    return (
        <AppContext.Provider value={appContext}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider