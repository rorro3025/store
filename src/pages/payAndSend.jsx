import Layout from "../components/Layout"
import React from 'react'

function PayAndSend() {
    return (
        <Layout>
            <div className="container mt-3 text-center">
                <h2>Preguntas frecuentes</h2>
                <div className="container mt-2">
                    <h4>Pago y envio</h4>
                    <p>Recomendamos pedir la talla que normalamte se usa en calzado, no tenis. Para tener mas certeza de
                        tu talla, mide de la punta de tu pie al
                        talon, la logica de la numeración es la siguiente
                        <ul className={"list-group"}>
                            <li className={"list-group-item"}>24 cm de largo euivale a la talla 4</li>
                            <li className={"list-group-item"}>24.5 equicale a la talla 4.5</li>
                        </ul>
                        Si tu medida esta entre el numero entero y el munero medio (ejemplo: 23.3) recomendamos
                        redondearla al numero medio o entero consecutivo (ejemplo: 23.3 sera 3.5)
                    </p>
                    <h4>Envios</h4>
                    <p>Enviamos nuestros productos a travez del sercivio de paqueteria y mensajeria DHL express.</p>
                    <p>El envio se realiza el siguiente dia habil una vez acreditado tu pago. El tiempo de entrega
                        aproximado es de 1 a 3 dias habiles; si el servicio de paqueteria considera que la direccion de
                        entega se encuentra en "Area remota" el tiempo de entrega estimado podria alargarse</p>
                    <p><strong>IMPORTANTE:</strong> Por temporada nuestros envios se realizan de 1 hasta 7 dias habiles
                        posterior a la compra.</p>
                    <p>Nuestra tarifa unica para envios dentro de la republica mexicana es de $149.00 pesos mexicanos.
                        Salvo en ocaciones excepcionales que, se podra solicitar un monto adicional para los casos que
                        el servicio de de paqueteria DHL considere el cp destino "Area remota".</p>
                    <p>Para resolver cualquier duda o problema con tu envio, te invitamos a comunicate con DHL express,
                        ya que al proporcionar tu numero de rastreo el servico puede ofrecerte toda la informacion
                        relatica al estatus de tu producto, de no resolver alguna situación directamente con ellos,
                        estamos para servirte, ponte en contacto con nosotros.</p>
                    <h4>Pagos</h4>
                    <p>Aceptamos los siguientes medios de pago.</p>
                   <div className="list-group">
                           <li className={"list-group-item"}>Paypal</li>
                   </div>
                </div>
            </div>
        </Layout>
    )
}

export default PayAndSend
