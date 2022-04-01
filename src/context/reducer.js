import {
    AUTH_LOGIN,
    AUTH_LOGOUT,
    FETCH_ALL_PRODUCTS,
    UPDATE_QUERY,
    ADD_TO_CART,
    ADD_QTY,
    SUBTRACT_QTY,
    REMOVE_FROM_CART
} from './actions'

const reducer = (state, action) => {
    if (action.type === AUTH_LOGIN) {
        return {
            ...state,
            isLoggedIn: true
        }
    }

    if (action.type === AUTH_LOGOUT) {
        return {
            ...state,
            isLoggedIn: false
        }
    }

    if (action.type === FETCH_ALL_PRODUCTS) {
        return {
            ...state,
            products: action.payload
        }
    }

    if (action.type === UPDATE_QUERY) {
        return {
            ...state,
            currentQuery: action.payload
        }
    }

    if (action.type === ADD_TO_CART) {
        let productsCopy = [...state.products]
        productsCopy.forEach((product) => {
            if (product.id === action.payload) {
                product.qty = product.qty + 1;
                product.inCart = true
            }
        })
        return {
            ...state,
            products: productsCopy
        }
    }

    if (action.type === ADD_QTY) {
        let productsToAddFrom = [...state.products];
        productsToAddFrom.forEach((product) => {
            if (product.id === action.payload) {
                product.qty = product.qty + 1;
            }
        });
        return {
            ...state,
            products: productsToAddFrom,
        };
    }

    if (action.type === SUBTRACT_QTY) {
        let productsToSubtractFrom = [...state.products];
        productsToSubtractFrom.forEach((product) => {
            if (product.id === action.payload) {
                product.qty = product.qty - 1;
            }
        });
        return {
            ...state,
            products: productsToSubtractFrom,
        };
    }

    if (action.type === REMOVE_FROM_CART) {
        let productsRemove = [...state.products];
        productsRemove.forEach((product) => {
            if (product.id === action.payload) {
                product.inCart = false;
                product.qty = 0;
            }
        });
        return {
            ...state,
            products: productsRemove,
        };
    }

    throw new Error(`no such action: ${action.type}`)
}



export default reducer