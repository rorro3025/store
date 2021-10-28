import React from "react";
import Link from "next/link";

function ProductCardItem({ name, description, src, id }) {
  return (
    <div className="card tile">
      <img src={`/img/${src}`} alt="zapatos_1" />
      <div className="card-body">
        <h5 className="card-tittle">{name}</h5>
        <p className="card-text">{description}</p>
        <Link href={`/product/${id}`}>
          <a className="btn btn-primary btn-sm">add</a>
        </Link>
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
