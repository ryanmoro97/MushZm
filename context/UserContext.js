import React from 'react'

const UserContext = React.createContext({
    email: null,
    orders: null,
    reports: null,
    cart: null,
    setOrders: () => {},
    setReports: () => {},
    setEmail: () => {},
    setCart: () => {}
})

export default UserContext