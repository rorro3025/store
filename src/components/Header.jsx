import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

function Header() {
  return (
    <div className="logo">
      <div className="row ">
        <div className="col text-center">
          <img src="img/logo.png" alt="image" height="144px" width="392px" />
        </div>
      </div>
      <div className="row">
        <div className="container ">
          <div className="text-center">
            <Link href="/men">
              <a className="btn btn-primary btn-sm mx-1">Hombre</a>
            </Link>
            <Link href="/woman">
              <a className="btn btn-primary btn-sm mx-1">Mujer</a>
            </Link>
            <Link href="/">
              <a className="btn btn-primary btn-sm mx-1">Pago y envio</a>
            </Link>
            <Link href="/">
              <a className={"btn btn-primary btn-sm mx-1"}>Contacto</a>
            </Link>
          </div>

          <ul className="nav justify-content-end">
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
              <Link href="/">
                <a className="nav-link">
                  <h2>
                    <FaShoppingBag />
                  </h2>
                  <h5>
                    <span className="position-absolute top-2 start-90 badge rounded-pill bg-danger">
                      0
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
          }
        `}
      </style>
    </div>
  );
}

export default Header;
