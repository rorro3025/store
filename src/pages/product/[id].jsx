import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { db } from "../../fireconfig";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";

function ItemDescription() {
  const { push, query } = useRouter();
  const initialState = {
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
    setProductInfo(data.data());
  };
  useEffect(() => {
    getProductInfo().then(() => console.log("get done"));
  }, []);
  return (
    <Layout>
      <div className="container mt-3">
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
            <button className={"btn btn-danger my-3 mx-2"} onClick={() => push("/")}>
              Return
            </button>
            <button className="btn btn-primary my-3 mx-2">add</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ItemDescription;
