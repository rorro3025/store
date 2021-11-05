import { useState, useEffect } from "react";
import ProgressBar from "../components/ProgressBar";
import Layout from "../components/Layout";
import CardItem from "../components/itemCard";
import { collectionProducts } from "../fireconfig";
import { getDocs } from "firebase/firestore";

function Woman() {
  const [catalog, setCatalog] = useState([]);

  const getCatalog = async () => {
    let { docs } = await getDocs(collectionProducts);
    let data = docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setCatalog(data);
  };
  useEffect(() => {
    getCatalog().then(() => console.log("get done"));
  }, []);
  return (
    <Layout>
      <div className="container mt-3 bg-light">
        <h1 className="text-center">Mujeres</h1>
        <div className="row row-cols-3">
          {catalog.length === 0 ? (
            <ProgressBar color={"danger"} />
          ) : (
            <>
              {catalog.map((item) => (
                <div className="col" key={item.id}>
                  <CardItem
                    name={item.Name}
                    src={item.Src}
                    description={item.Description}
                    id={item.id}
                    stock={item.Stock}
                    price={item.Price}
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Woman;
