import React from "react"
import {useRouter} from "next/router"
import ReactDOM from "react-dom"
import {db} from "../fireconfig"
import {doc, updateDoc, arrayUnion} from "firebase/firestore";
import {useUser} from "../context/shopContext"

function PaypalM({localP}) {
    const {uid, shoppingList, clearAllItems} = useUser()
    const {push} = useRouter();
    const recordOrder = async () => {
        let docRef = doc(db, "shopHistory", uid)
        let articles = shoppingList.map((article) => ({
            id: article.id,
            name: article.name,
            price: article.price,
            bought_at: new Date()
        }))
        await updateDoc(docRef, {items: arrayUnion(...articles)})
    }
    const PayPalButton = window.paypal.Buttons.driver("react", {React, ReactDOM});
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        currency_code: "MXN",
                        value: localP,
                    },
                },
            ],
        });
    }
    const onApprove = (data, actions) => {
        return actions.order.capture(success());
    }
    const success = () => {
       recordOrder().then(() => {
            push("/account")
            clearAllItems()
        })
    }
    return (
        <div className={"bg-light"}>
            <br/>
            <PayPalButton createOrder={(data, actions) => createOrder(data, actions)}
                          onApprove={(data, actions) => onApprove(data, actions)}/>
        </div>
    )
}

export default PaypalM