import { useState, createContext, useContext } from "react"
import { auth } from "../fireconfig"

export const ShopContext = createContext()

export const useUser = () => useContext(ShopContext)

export const ShopProvider = ({ children }) => {

    const user = auth.currentUser;
    let initialState = false
    if (user) initialState = true
    const [session, setSession] = useState(initialState)
    const [shoppingList,setShoppingList]= useState([])
    const updateShoppingList = (id,name,description,price,uuid) => setShoppingList([...shoppingList,{id,name,description,price,uuid}])
    const deleteItemList = (id) => setShoppingList(shoppingList.filter((item)=>item.uuid !== id))

    return (
        <ShopContext.Provider value={{ session, setSession,shoppingList,updateShoppingList,deleteItemList }}>
            {children}
        </ShopContext.Provider>
    )
}