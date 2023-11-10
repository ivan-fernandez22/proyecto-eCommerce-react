import { Link } from "react-router-dom"

function Item ( {producto} ) {
    return (
        <div className="producto">
            <img src={producto.imagen} className="img-producto" alt={producto.nombre}/>
            <div>
                <h4 className="titulo-producto">{producto.nombre}</h4>
                <p className="stock-producto">Stock: {producto.stock} U</p>
                <p className="precio-producto"> ${producto.precio}</p>
                <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
            </div>
        </div>
    )
}

export default Item