import React from "react"

const AppContext = React.createContext({
    isLoggedIn: false,
    products: []
})


export default AppContext