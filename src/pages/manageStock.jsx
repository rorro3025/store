import { useState } from "react";
import React from "react";
import Layout from "../components/Layout";
import { addDoc } from "firebase/firestore";
import { collectionProducts } from "../fireconfig";
import { toast } from "react-toastify";

function ManageStock() {
  const initialState = {
    Name: "",
    Description: "",
    Price: 0,
    Size: "2.5 - 7",
    Stock: 0,
    Src: "",
  };
  const [itemStock, setItemStock] = useState(initialState);
  const addStock = async (item) => {
    let doc = {
      ...item,
      Price: parseFloat(item.Price),
      Stock: parseInt(item.Stock),
    };
    console.log(doc);
    let docRef = await addDoc(collectionProducts, doc);
    toast("Doc written with ID " + docRef.id);
    setItemStock(initialState);
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
      <div className="container text-center mt-5">
        <h1>Add new Stock</h1>
        <div className="col-md-4 offset-md-4">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="Name"
              className="form-control my-3"
              placeholder="name"
              onChange={handleChange}
              value={itemStock.Name}
            />
            <textarea
              name="Description"
              className="form-control my-3"
              onChange={handleChange}
              rows="3"
              placeholder="Some description here"
              value={itemStock.Description}
            ></textarea>
            <input
              type="number"
              name="Price"
              className="form-control my-3"
              placeholder="Price"
              onChange={handleChange}
              value={itemStock.Price}
            />
            <input
              type="text"
              name="Size"
              className="form-control my-3"
              placeholder="Size"
              onChange={handleChange}
              value={itemStock.Size}
            />
            <input
              type="number"
              name="Stock"
              className="form-control my-3"
              placeholder="Stock"
              onChange={handleChange}
              value={itemStock.Stock}
            />
            <input
              type="text"
              name="Src"
              className="form-control my-3"
              placeholder="Src"
              onChange={handleChange}
              value={itemStock.Src}
            />
            <input type="submit" value="Save" className="btn btn-dark " />
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default ManageStock;
