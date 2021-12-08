import {useState, createContext, useContext} from "react"
import {auth} from "../fireconfig"
import {toast} from "react-toastify";

export const ShopContext = createContext()

export const useUser = () => useContext(ShopContext)

export const ShopProvider = ({children}) => {

    const user = auth.currentUser;
    let initialState = false
    let uuid = ""
    if (user){
        initialState = true
        uuid = user.uid
    }
    const [uid, setUid] = useState(uuid)
    const [session, setSession] = useState(initialState)
    const [shoppingList, setShoppingList] = useState([])
    const updateShoppingList = (id, name, description, price, uuid, src, stock) => setShoppingList([...shoppingList, {
        id,
        name,
        description,
        price,
        uuid,
        src,
        stock,
    }])
    const deleteItemList = (id) => setShoppingList(shoppingList.filter((item) => item.uuid !== id))
    const handleAddToCard = (id, name, description, price, src, stock) => {
        let uuid = new Date().getTime();
        updateShoppingList(id, name, description, price, uuid, src, stock)
        toast(name + " added to cart");
    }
    const clearAllItems = () => setShoppingList([])
    const getSubtotal = () => shoppingList.reduce((total, item) => total + item.price, 0)
    return (
        <ShopContext.Provider value={{session, setSession,uid,setUid, shoppingList,clearAllItems, handleAddToCard, deleteItemList, getSubtotal}}>
            {children}
        </ShopContext.Provider>
    )
}