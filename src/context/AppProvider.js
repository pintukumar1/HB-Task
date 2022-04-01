import React, { useReducer } from 'react'
import reducer from './reducer';
import AppContext from './app-context'
import { AUTH_LOGIN, AUTH_LOGOUT, FETCH_ALL_PRODUCTS } from './actions'
import axios from 'axios'

const defaultAppState = {
    isLoggedIn: false,
    products: []
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
                    return product
                })
                dispatchAppAction({ type: FETCH_ALL_PRODUCTS, payload: newArray })
            })
    }

    const appContext = {
        isLoggedIn: appState.isLoggedIn,
        products: appState.products,
        login: loginHandler,
        logout: logoutHandler,
        fetchAll: fetchAllProducts
    };

    return (
        <AppContext.Provider value = {appContext}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider