import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

function Footer() {
  return (
    <div className="foot text-center mt-5">
      <div className="col aling-items-center pt-4">
      <div className="diplay-flex">
        <BsFacebook className="mx-2" />
        <AiFillTwitterCircle className="mx-2" />
      </div>
      <p>Todos los derechos reservados | 2021</p>
      </div>
      <style jsx>
        {`
           {
            .foot {
              background-color: gray;
              color: white;
              height: 110px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Footer;
