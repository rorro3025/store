import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import Image from "next/image";
import logoImg from "./images/logo.png";
import { useUser } from "../context/shopContext";

function Header() {
  const { shoppingList } = useUser();
  let itemCount = shoppingList.length;

  return (
    <div className="logo">
      <div className="row ">
        <div className="col text-center">
          <Image alt="logo" src={logoImg} height={84} width={332} />
        </div>
      </div>
      <div className="row mt-1">
        <div className="d-flex justify-content-between">
          <span>
            <h1 className="spacing">espaciado</h1>
          </span>
          <div className="text-center">
            <Link href="/">
              <a className="btn btn-primary btn-sm mx-1">Home</a>
            </Link>
            <Link href="/woman">
              <a className="btn btn-primary btn-sm mx-1">Mujer</a>
            </Link>
            <Link href="/payAndSend">
              <a className="btn btn-primary btn-sm mx-1">Pago y envio</a>
            </Link>
            <Link href="/">
              <a className={"btn btn-primary btn-sm mx-1"}>Contacto</a>
            </Link>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <Link href="/account">
                <a className="nav-link">
                  <h2>
                    <AiOutlineUser />
                  </h2>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/bag">
                <a className="nav-link">
                  <h2>
                    <FaShoppingBag />
                  </h2>
                  <h5>
                    <span className="position-absolute top-2 start-90 badge rounded-pill bg-danger">
                      {itemCount}
                    </span>
                  </h5>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>
        {`
           {
            .logo {
              background-color: rgb(232, 144, 144);
            }
            .spacing {
              color: rgb(232, 144, 144);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Header;
