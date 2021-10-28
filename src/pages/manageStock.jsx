import { useState } from "react";
import React from "react";
import Layout from "../components/Layout";
import { addDoc } from "firebase/firestore";
import { collectionProducts } from "../fireconfig";

function ManageStock() {
  const initialState = {
    Name: "Edith",
    Description: "snake skin",
    Price: 30.0,
    Size: "2.5 - 7",
    Stock: 10,
    Src: "img/img_5.jpg",
  };
  const [itemStock, setItemStock] = useState(initialState);
  const addStock = async (item) => {
    let docRef = await addDoc(collectionProducts, item);
    console.log("Doc written with ID", docRef.id);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addStock(itemStock);
  };
  const handleChange = ({ target }) => {
    let { name, value } = target;
    setItemStock({ ...itemStock, [name]: value });
  };
  return (
    <Layout>
      <div className="container">
        <div className="col-md-4">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="Name"
              className="form-control"
              placeholder="name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="Description"
              className="form-control"
              placeholder="Description"
              onChange={handleChange}
            />
            <input
              type="number"
              name="Price"
              className="form-control"
              placeholder="Price"
              onChange={handleChange}
            />
            <input
              type="text"
              name="Size"
              className="form-control"
              placeholder="Size"
              onChange={handleChange}
            />
            <input
              type="number"
              name="Stock"
              className="form-control"
              placeholder="Stock"
              onChange={handleChange}
            />
            <input
              type="text"
              name="Src"
              className="form-control"
              placeholder="Src"
              onChange={handleChange}
            />
            <input type="submit" value="Save" className="btn btn-dark " />
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default ManageStock;
