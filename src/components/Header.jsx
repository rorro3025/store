import Link from "next/link";
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
            <Link href="/">
              <a className="btn btn-primary">Hombre</a>
            </Link>
            <Link href="/">
              <a className="btn btn-primary">Mujer</a>
            </Link>
            <Link href="/">
              <a className="btn btn-primary">Acerca de nosotros</a>
            </Link>
          </div>
          <div className="text-end">
            <button className="btn btn-danger">carrito</button>
            <button className="btn btn-danger">cuenta</button>
          </div>
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
