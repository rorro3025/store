import {FcShop} from "react-icons/fc"
import {TiDelete} from "react-icons/ti"
import {useUser} from "../context/shopContext"

function ItemResumePay({name, description, price, itemPosition, id,src,stock}) {
    const {deleteItemList} = useUser();
    return (
        <div className="card text-white bg-primary mb-3 tile">
            <div className="card-header d-flex justify-content-between">
                <div><h4><FcShop/>--<strong>{name}</strong></h4></div>
                <div><TiDelete onClick={() => deleteItemList(itemPosition)}/></div>
            </div>
            <div className={"card-body d-flex"}>
                <img src={`/img/${src}`} alt={name} className={"border border-4 border-danger rounded-circle"}
                     width="100px"/>
                <div className={"mx-3"}>
                    <strong>Product description:</strong> {description}
                    <br/>
                    <strong>Price per unit:</strong> {price}
                    <br/>
                    <strong>barcode:</strong> {id}
                </div>
            </div>
            <style jsx>
                {`{
                .tile {
                  max-width: calc(100% - 15);
                  margin: 15px;
                }

                }`}
            </style>
        </div>
    )
}

export default ItemResumePay