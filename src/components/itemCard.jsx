import React from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useUser } from "../context/shopContext";

function ProductCardItem({ name, description, src, id, stock, price }) {
  const { updateShoppingList } = useUser();
  const handleBuy = (id, name, description, price) => {
    let uuid = new Date().getTime();
    updateShoppingList(id, name, description, price, uuid);
    toast(name + " added to cart");
  };

  return (
    <div className="card tile">
      <img src={`/img/${src}`} alt="shoes_1" />
      <div className="card-body">
        <h5 className="card-tittle">{name}</h5>
        <p className="card-text">{description}</p>
        <Link href={`/product/${id}`}>
          <a className="btn btn-primary m-2">Info</a>
        </Link>
        <button
          className="btn btn-secondary m-2"
          onClick={() => handleBuy(id, name, description, price)}
        >
          Add
        </button>
      </div>
      <style jsx>
        {`
           {
            .tile {
              max-width: 280px;
              margin: 15px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default ProductCardItem;
