import Layout from "../components/Layout"
import {useUser} from "../context/shopContext"
import ItemResumePay from "../components/ItemResumePay"

function Bag() {
    const {shoppingList} = useUser();
    let account = shoppingList.reduce((total, item) => total + item.price, 0)
    console.log(account)

    return (
        <Layout>
            <div className="container mt-3">
                <h2 className="text-center">Shopping list</h2>
                <div className="row mt-3">
                    <div className="col-md-8">
                        {shoppingList.map((item) => (
                            <ItemResumePay name={item.name} price={item.price} description={item.description}
                                           itemPosition={item.uuid} id={item.id} src={item.src} stock={item.stock}
                                           key={item.uuid}/>
                        ))}
                    </div>
                    <div className="col-md-auto">
                        <h3>Total $ {account.toFixed(2)} </h3>
                        <div className="d-grid gap-2">
                            <button className="btn btn-success">Pay now</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Bag;