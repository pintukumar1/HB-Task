import { AUTH_LOGIN, AUTH_LOGOUT, FETCH_ALL_PRODUCTS } from './actions'

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

    if (action.type = FETCH_ALL_PRODUCTS) {
        return {
            ...state,
            products: action.payload
        }
    }

    throw new Error(`no such action: ${action.type}`)
}

export default reducer