import Link from "next/link"
import Carousel from "../components/Carousel"

function Popular() {
    return (
        <div className="container text-center">
            <div className="row mt-4">
                <Carousel/>
            </div>
            <div className="row mt-3 justify-content-center">
                <div className="col-md-auto mt-2">
                    <Link href={"/product/Pohx6jDu1RHTei73vcs3"}>
                        <a>
                            <img
                                src="img/zapatos_1.webp"
                                width={"300px"}
                                className="border border-4 border-primary"
                                alt={"popular-1"}
                            />
                        </a>
                    </Link>
                </div>
                <div className="col-md-auto mt-2">
                    <Link href="/product/VhcYDmp4rXKPsKGnYj80">
                        <a>
                            <img
                                src="img/zapatos_2.webp"
                                width={"300px"}
                                className="border border-4 border-primary"
                            />
                        </a>
                    </Link>
                </div>
                <div className="col-md-auto mt-2">
                    <Link href="/product/MHdifUhYdaOSltc8vfeD">
                        <a>
                            <img
                                src="img/zapatos_3.webp"
                                width={"300px"}
                                className="border border-4 border-primary"
                            />
                        </a>
                    </Link>
                </div>
            </div>
            <div className={"mt-3 tex-center"}>
                <h1>¿Quienes somos?</h1>
                <p>
                    Somos una marca 100% mexicana especializada en confección de calzado
                    elaborado de forma artesanal con materiales de alta calidad. Desde que
                    iniciamos operaciones hasta el día de hoy hemos hecho el máximo
                    esfuerzo por brindarle el mejor servicio a todos nuestros clientes y
                    aprender de nuestros errores para que tu compra sea cada vez una mejor
                    experiencia.
                </p>
                <div className="row">
                    <img src="img/foot.jpeg" width={"800px"}/>
                </div>
            </div>
        </div>
    );
}

export default Popular;
