import {useEffect, useState} from "react"
import Layout from "../components/Layout"
import dynamic from "next/dynamic"
import {useUser} from "../context/shopContext"
import ItemResumePay from "../components/ItemResumePay"
import Head from "next/head"

function Bag() {
    const {shoppingList, getSubtotal} = useUser();
    const [confirmed, setConfirmed] = useState(false)
    let amount = shoppingList.reduce((total, item) => total + item.price, 0)
    //let account = shoppingList.reduce((total, item) => total + item.price, 0)
    /*dynamic import*/
    const DynamicComponentWithNoSSR = dynamic(
        () => import("../components/PaypalM"),
        {ssr: false}
    );
    const handleConfirm = () => setConfirmed(true)
    const handleCancel = () => setConfirmed(false)
    return (
        <Layout>
            <Head>
                <title>Bag</title>
                <script
                    src="https://www.paypal.com/sdk/js?client-id=AdhZgg5imO91CYczWGUQmhNNOva1fCQL1Qk1uLVqqpClsLTzPrM2sA2qiD_wf2uc2uFbb8n7lFA9alhg"></script>
            </Head>
            <div className="container mt-3">
                <h2 className="text-center">Shopping list</h2>
                <div className="row mt-3">
                    {confirmed === false &&
                        <div className="col-md-8">
                            {shoppingList.map((item) => (
                                <ItemResumePay name={item.name} price={item.price} description={item.description}
                                               itemPosition={item.uuid} id={item.id} src={item.src} stock={item.stock}
                                               key={item.uuid}/>
                            ))}
                        </div>}
                    <div className="col-md-auto">
                        <h3>Total $ {amount.toFixed(2)} </h3>
                        <div className="d-grid gap-2">
                            <button className="btn btn-success" onClick={handleConfirm} disabled={amount === 0}>Confirm
                                order
                            </button>
                            <button className="btn btn-danger" onClick={handleCancel}
                                    disabled={confirmed === false}>Cancel
                            </button>
                        </div>
                        {confirmed === true &&
                            <DynamicComponentWithNoSSR localP={amount}/>}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Bag;