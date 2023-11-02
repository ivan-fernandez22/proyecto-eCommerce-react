import { useState } from "react";
import remeron1 from "../../imgs/remeron1.jpg"
import ItemCount from "./ItemCount"

function ItemDetail ( {item} ) {

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad (cantidad -1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad (cantidad + 1)
    }

    const handleAgregar = () => {
        console.log(item)
    }

    return (
        <div className="item-detail">
            <img src={remeron1} alt={item.nombre} className="item-detail-img"></img>
            <div>
                <h3 className="item-detail-nombre">{item.nombre}</h3>
                <p className="item-detail-descripcion">{item.descripcion}</p>
                <p className="item-detail-cuidados">CUIDADOS: {item.cuidados}</p>
                <p className="item-detail-precio">${item.precio}</p>
                <ItemCount cantidad={cantidad} handleSumar={handleSumar} 
                handleRestar={handleRestar} handleAgregar={handleAgregar}/>
            </div>
        </div>
    )
}

export default ItemDetail 