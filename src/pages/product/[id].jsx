import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { db } from "../../fireconfig";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import {toast} from "react-toastify"
import {useUser} from "../../context/shopContext"

function ItemDescription() {
  const { push, query } = useRouter();
  const {updateShoppingList} = useUser()
  const handleBuy = (id, name, description, price) => {
    let uuid = new Date().getTime();
    updateShoppingList(id, name, description, price, uuid);
    toast(name + " added to cart");
  };
  const initialState = {
    id:"",
    Name: "",
    Description: "",
    Price: 0.0,
    Size: "",
    Stock: 0,
    Src: "",
  };
  const [productInfo, setProductInfo] = useState(initialState);
  const getProductInfo = async () => {
    let { id } = query;
    let docRef = doc(db, "Products", id);
    let data = await getDoc(docRef);
    setProductInfo({id,...data.data()});
    console.log(productInfo);
  };
  useEffect(() => {
    getProductInfo().then(() => console.log("get done"));
  }, []);
  return (
    <Layout>
      <div className="container mt-3">
        <div
          className={
            productInfo.Stock === 0 ? "alert alert-danger" : "visually-hidden"
          }
        >
          "NO AVALIBLE!!!"
        </div>
        <div className="row">
          <div className="col">
            <img
              src={`/img/${productInfo.Src}`}
              alt="img"
              width="500px"
              className="border border-primary border-4"
            />
          </div>
          <div className="col">
            <h1>Modelo: {productInfo.Name}</h1>
            <h3>
              <strong>$ {productInfo.Price}</strong>
            </h3>
            <p>Tallas {productInfo.Size}</p>
            <p>Descripcion: {productInfo.Description}</p>
            <button
              className={"btn btn-danger my-3 mx-2"}
              onClick={() => push("/woman")}
            >
              Return
            </button>
            <button className="btn btn-primary my-3 mx-2" onClick={(()=>handleBuy(productInfo.id,productInfo.Name, productInfo.Description, productInfo.Price))}>add</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ItemDescription;
