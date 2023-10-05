import React from 'react'
import carrito from "../../imgs/carrito.png";

function CartWidget() {
    return (
        <a href="a"  className="carrito-header">
            <div className="contenedor-png-carrito">
                <img className="png-carrito" src={carrito} alt="png de carrito" />
                <span id="numero-carrito">0</span>
            </div>
        </a>
    )
}

export default CartWidget