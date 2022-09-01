import React, {useState, createContext, useContext } from "react"

export const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)


export const AppContextProvider = ({children}) => {

    const [active, setActive] = useState(true)
    const [screenSize, setscreenSize] = useState(undefined)

return (<AppContext.Provider value={{active,setActive,screenSize,setscreenSize}}>
    {children}
</AppContext.Provider>)
}