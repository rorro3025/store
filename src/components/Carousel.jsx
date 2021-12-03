import Link from "next/link"

function Carousel() {
    const images = [{
        uuid: "aRQB5RDhyJd3i88A51dd",
        src: "img/zapatos_4.webp",
        name: "Susan"
    }, {
        uuid: "R9mA4puHoFCV1H6M7tfK",
        src: "img/botas_3.webp",
        name: "Charlotte"
    }, {
        uuid: "fPmRp5rvu0GrDpotPW4c",
        src: "img/img_13.webp",
        name: "Lucky puntual"
    },
        {
            uuid: "IMNXoDfINDi7r0lPm55W",
            src: "img/img_17.webp",
            name: "Nico"
        }]
    return (
        <div className="col-sm justify-content-center px-5">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                            aria-label="Slide 4"></button></div>
                <div className="carousel-inner">
                    {
                        images.map((item, index) => (
                            <div className={index === 0 ?"carousel-item active":"carousel-item"} key={index}>
                                <Link href={"/product/" + item.uuid}>
                                    <a>
                                        <img src={item.src} height={"420px"}
                                             className="border border-4 border-primary w-100" alt={item.uuid}/>
                                    </a>
                                </Link>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className={"text-primary"}>{item.name}</h5>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel;