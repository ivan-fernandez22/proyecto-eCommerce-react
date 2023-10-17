import { Link } from "react-router-dom"
import portada1 from "../../imgs/Remeras.png"
import portada2 from "../../imgs/buzos.png"
import portada3 from "../../imgs/jeans.png"

function Categorias () {
    return (
        <div className="div-categorias">

            <Link to="/Remeras" className="categorias">
                <img className="foto-categorias" src={portada1} alt="portada-remeras"/>
            </Link>

            <Link to="/Buzos" className="categorias">
                <img className="foto-categorias" src={portada2} alt="portada-buzos"/>
            </Link>

            <Link to="/Pantalones" className="categorias">
                <img className="foto-categorias" src={portada3} alt="portada-jeans"/>
            </Link>

        </div>
    )
}

export default Categorias 