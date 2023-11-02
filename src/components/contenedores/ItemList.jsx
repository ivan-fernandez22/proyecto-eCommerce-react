import { toCapital } from "../../services/toCapital"
import Item from "./Item"

function ItemList ( {productos, titulo} ) {
    return (
        <div>
            <h2 className="titulo-productos-destacados">{toCapital(titulo)}</h2>

            <div className="productos-div">
                { productos.map ((prod) => <Item producto={prod} key={prod.id} />) }
            </div>
        </div>
    )
}

export default ItemList