import React, { useContext } from 'react'
import carrito from "../../imgs/carrito.png";
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';

function CartWidget() {

    const { cantidadEnCarrito } = useContext(CarritoContext)

    return (
        <Link to="/Carrito" className="carrito-header">
            <div className="contenedor-png-carrito">
                <img className="png-carrito" src={carrito} alt="png de carrito" />
                <span id="numero-carrito">{cantidadEnCarrito()}</span>
            </div>
        </Link>
    )
}

export default CartWidget
