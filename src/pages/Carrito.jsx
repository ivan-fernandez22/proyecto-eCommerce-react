import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import { Link } from "react-router-dom"

function Carrito() {

    const { carrito, precioFinal, vaciarCarrito } = useContext(CarritoContext)

    const handleVaciarCarrito = () => {
        vaciarCarrito()
    }

    return (
        <>
            <h2 className="carrito-titulo">Carrito</h2>

            {
                carrito.map((prod) => (
                    <div key={prod.id} className="carrito-container">
                        <img src={prod.imagen} className="img-carrito" alt={prod.nombre}/>
                        <div className="container-detalles">
                            <h4 className="carrito-prod-nombre">{prod.nombre}</h4>
                            <p className="carrito-prod-precio-unidad">Precio por unidad: ${prod.precio}</p>
                            <p className="carrito-prod-precio-total">Precio total: ${prod.precio * prod.cantidad}</p>
                            <p className="carrito-prod-cantidad">Cantidad: {prod.cantidad}</p>
                        </div>
                    </div>
                ))
            }

            {
                carrito.length > 0 ?
                    <>
                        <h3 className="carrito-precio-final">Precio final: ${precioFinal()}</h3>
                        <button onClick={handleVaciarCarrito} className="boton-vaciar">Vaciar</button>
                    </> :
                    <>
                        <h3 className="carrito-vaciado">Su carrito se encuentra vacio <i className="bi bi-emoji-frown"></i></h3>
                        <Link to="/productos"><button className="comprar-ahora">IR A PRODUCTOS</button></Link>
                    </>
            }

        </>
    )
}

export default Carrito