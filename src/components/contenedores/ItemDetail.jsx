import { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import { CarritoContext } from "../../context/CarritoContext";

function ItemDetail ( {item} ) {

    const { carrito, agregarAlCarrito} = useContext(CarritoContext)
    console.log (carrito)

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad (cantidad -1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad (cantidad + 1)
    }

    return (
        <div className="item-detail">
            <img src={item.imagen} alt={item.nombre} className="item-detail-img"></img>
            <div className="item-detail-container">
                <h3 className="item-detail-nombre">{item.nombre}</h3>
                <p className="item-detail-descripcion">{item.descripcion}</p>
                <p className="item-detail-cuidados">CUIDADOS: {item.cuidados}</p>
                <p className="item-detail-stock">Stock: {item.stock} unidades disponibles!</p>
                <p className="item-detail-precio">${item.precio}</p>
                <ItemCount
                    cantidad={cantidad} 
                    handleSumar={handleSumar} 
                    handleRestar={handleRestar} 
                    handleAgregar={() => { agregarAlCarrito (item, cantidad) }}
                />
            </div>
        </div>
    )
}

export default ItemDetail 