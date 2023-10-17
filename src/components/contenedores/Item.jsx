import { Link } from "react-router-dom"
import remeron1 from "../../imgs/remeron1.jpg"

function Item ( {producto} ) {
    return (
        <div className="producto">
            <img src={remeron1} className="img-producto" alt={producto.nombre}/>
            <div>
                <h4>{producto.nombre}</h4>
                <p>Precio: ${producto.precio}</p>
                <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
            </div>
        </div>
    )
}

export default Item