function Popular() {
  return (
    <div className="container text-center">
      <div className="position-relative text-center overflow-hidden mt-4">
        <img src="img/zapatos_4.jpeg" height={"420px"} width={"1000px"} />
      </div>
      <div className="row mt-3">
        <div className="col-4">
          <img
            src="img/zapatos_1.jpeg"
            width={"300px"}
            className="border border-4 border-primary"
          />
        </div>
        <div className="col-4">
          <img
            src="img/zapatos_2.jpeg"
            width={"300px"}
            className="border border-4 border-primary"
          />
        </div>
        <div className="col-4">
          <img
            src="img/zapatos_3.jpeg"
            width={"300px"}
            className="border border-4 border-primary"
          />
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
          <img src="img/foot.jpeg" width={"800px"} />
      </div>
      </div>
    </div>
  );
}

export default Popular;
