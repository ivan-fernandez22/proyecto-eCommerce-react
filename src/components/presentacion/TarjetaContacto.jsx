import { Link } from "react-router-dom"

function TarjetaContacto () {
    return (
        <div className="container-contacto">
            <p className="texto-contacto">¿Buscas contactarte con nosotros?</p>
            <p className="texto-contacto">Para consultas, reclamos y otras cuestiones administrativas, hacer click en el botón de abajo <i className="bi bi-arrow-down-circle-fill"></i></p>
            <button className="boton-contacto">
                <Link to="/Contacto">Contácto</Link>
            </button>
        </div>
    )
}

export default TarjetaContacto