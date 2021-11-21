import Link from "next/link";
import Layout from "../components/Layout"
function Success() {
    return (
       <Layout>
           <div className="container text-center">
               <h3>Compra realizada satisfactoriamente</h3>
               <p>En breve recibiras un email de confirmacion</p>
              <Link href={"/woman"}>
                  <a className="btn btn-danger">See other products</a>
              </Link>
           </div>
       </Layout>
    )
}

export default Success