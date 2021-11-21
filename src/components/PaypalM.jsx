import React from "react"
import {useRouter} from "next/router"
import ReactDOM from "react-dom"
function PaypalM({localP}) {
    const {push} = useRouter();
    const PayPalButton = window.paypal.Buttons.driver("react", {React, ReactDOM});
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: localP,
                    },
                },
            ],
        });
    }
    const onApprove = (data, actions) => {
        return actions.order.capture(success());
    }
    const success = () =>{
        console.log("Purchase success")
        push("/account")
    }
    return (
        <div className={"row"}>
            <br/>
            <PayPalButton createOrder={(data, actions) => createOrder(data,actions)}
                          onApprove={(data, actions) => onApprove(data, actions)}/>
        </div>
    )
}

export default PaypalM