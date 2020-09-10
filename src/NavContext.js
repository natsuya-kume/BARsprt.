import React from 'react'

const NavContext = React.createContext()

const NavProvider = ({ children }) => {

    const [value, setValue] = React.useState(0);
    const navdata = { value, setValue }

    return (
        <NavContext.Provider value={navdata}>
            {children}
        </NavContext.Provider>
    )
}

export { NavContext, NavProvider }