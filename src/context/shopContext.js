import { useState, createContext, useContext } from "react"
import { auth } from "../fireconfig"

export const ShopContext = createContext()

export const useUser = () => useContext(ShopContext)

export const ShopProvider = ({ children }) => {

    const user = auth.currentUser;
    let initialState = false
    if (user) initialState = true
    const [session, setSession] = useState(initialState)
    const [shoppingList,setShoppingList]= useState([{id:"1a"}])

    return (
        <ShopContext.Provider value={{ session, setSession,shoppingList,setShoppingList }}>
            {children}
        </ShopContext.Provider>
    )
}