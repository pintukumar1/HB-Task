import React from "react"

const AppContext = React.createContext({
    isLoggedIn: false,
    products: [],
    currentQuery: "",
    login: () => { },
    logout: () => { },
    fetchAll: () => { },
    searchItems: (query) => { },
    addToCart: (id) => { },
    addQty: (id) => { },
    subtractQty: (id) => { },
    removeFromCart: (id) => { }
})


export default AppContext