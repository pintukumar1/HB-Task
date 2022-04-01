import { AUTH_LOGIN, AUTH_LOGOUT, FETCH_ALL_PRODUCTS, UPDATE_QUERY, ADD_TO_CART } from './actions'

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

    if(action.type === ADD_TO_CART) {
        let productsCopy = [...state.products]
        productsCopy.forEach((product) => {
            if(product.id === action.payload){
                product.qty = product.qty + 1;
                product.inCart = true
            }
        })
        return {
            ...state,
            products: productsCopy
        }
    }

    throw new Error(`no such action: ${action.type}`)
}

export default reducer