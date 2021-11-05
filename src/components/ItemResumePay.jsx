import {FcShop} from "react-icons/fc"
import {TiDelete} from "react-icons/ti"
import {useUser} from "../context/shopContext"
function ItemResumePay({name, description, price,itemPosition,id}) {
  const {deleteItemList} = useUser();
    return (
        <div className="card text-white bg-primary mb-3 tile">
            <div className="card-header d-flex justify-content-between">
                 <div><FcShop/>{name}-{itemPosition}</div> <div><TiDelete  onClick={()=>deleteItemList(itemPosition)} /></div></div>
            <div className={"card-body"}>
                Product description: {description}
                <br/>
                Price per unit: {price}
                barcode: {id}
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