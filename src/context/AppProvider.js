import { useReducer } from "react"
import AppContext from "./app-context"

const defaultAppState = {
    isLoggedIn: false
}

const appReducer = (state, action) => {
    if (action.type === "AUTH_LOGIN") {
        return {
            ...state,
            isLoggedIn: true
        }
    }

    if(action.type === "AUTH_LOGOUT"){
        return {
            ...state,
            isLoggedIn: false
        }
    }

    throw new Error(`no such action: ${action.type}`)
}

const AppProvider = (props) => {
    const [appState, dispatchAppAction] = useReducer(appReducer, defaultAppState)

    const loginHandler = () => {
        dispatchAppAction({ type: "AUTH_LOGIN" })
    }

    const logoutHandler = () => {
        dispatchAppAction({type: "AUTH_LOGOUT"})
    }

    
    const appContext = {
        isLoggedIn : appState.isLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return (
        <AppContext.Provider value={appContext}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider