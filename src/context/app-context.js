import { createContext } from 'react'

const AppContext = createContext({
    isLoggedIn: false,
    login: () => { },
    logout: () => { }
})

export default AppContext