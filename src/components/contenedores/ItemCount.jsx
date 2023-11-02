function ItemCount ({cantidad, handleRestar, handleSumar, handleAgregar}) {
    return (
        <>
            <div className="item-count">
                <button onClick={handleRestar}>-</button>
                <p>{cantidad}</p>
                <button onClick={handleSumar}>+</button>
            </div>
            <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount