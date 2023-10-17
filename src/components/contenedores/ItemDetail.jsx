import remeron1 from "../../imgs/remeron1.jpg"

function ItemDetail ( {item} ) {
    return (
        <div className="item-detail">
            <img src={remeron1} alt={item.nombre} className="item-detail-img"></img>
            <div>
                <h3 className="item-detail-nombre">{item.nombre}</h3>
                <p className="item-detail-descripcion">{item.descripcion}</p>
                <p className="item-detail-cuidados">CUIDADOS: {item.cuidados}</p>
                <p className="item-detail-precio">${item.precio}</p>
            </div>

        </div>
    )
}

export default ItemDetail 