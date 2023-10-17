import Item from "./Item"

function ItemList ( {productos} ) {
    return (
        <div>
            <h2 className="titulo-productos-destacados">Productos destacados</h2>

            <div className="productos-div">
                { productos.map ((prod) => <Item producto={prod} key={prod.id} />) }
            </div>
        </div>
    )
}

export default ItemList