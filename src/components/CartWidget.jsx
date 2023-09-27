import carrito from '../imgs/carrito.png';

export const CartWidget = () => {
    return (
        <a href="a" className="carrito-header">
            <img src={carrito} alt="png de carrito" />
            <span id="numero-carrito">0</span>
        </a>
    )
}