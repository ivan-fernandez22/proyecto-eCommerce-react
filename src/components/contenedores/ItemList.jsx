import { Link } from "react-router-dom"
import { toCapital } from "../../services/toCapital"
import Item from "./Item"

function ItemList({ productos, titulo }) {
    return (
        <div>
            <h2 className="titulo-productos">{toCapital(titulo)}</h2>

            <div className="categorias-prods">
                <Link to="/productos/remeras"><button className="boton-categoria">Remeras</button></Link>
                <Link to="/productos/buzos"><button className="boton-categoria">Buzos</button></Link>
                <Link to="/productos/pantalones"><button className="boton-categoria">Pantalones</button></Link>
            </div>

            <div className="productos-div">
                {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
            </div>
        </div>
    )
}

export default ItemList