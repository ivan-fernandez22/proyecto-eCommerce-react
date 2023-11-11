import { useContext, useState } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { useForm } from "react-hook-form"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/data"
import Swal from "sweetalert2"

function Checkout () {

    const { carrito, precioFinal, vaciarCarrito } = useContext(CarritoContext)

    const [pedidoId, setPedidoId] = useState ("")

    const { register, handleSubmit } = useForm()

    const comprar = (d) => {
        const pedido = {
            cliente: d,
            productos: carrito,
            total: precioFinal()
        }

        const refPedidos = collection(db, "pedidos")

        addDoc(refPedidos, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
                vaciarCarrito()
            })

            Swal.fire({
                title: "Felicidades!",
                text: "Su compra se ha realizado con exito!",
                icon: "success"
            });
    }

    if (pedidoId) {
        return (
            <div>
                <h2 className="titulo-compra-realizada">Muchas gracias por comprar en Southern Essences! <i className="bi bi-emoji-smile-fill"></i></h2>
                <p className="texto-compra-realizada">Tu número de compra es: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div>
            <h2 className="titulo-checkout">Finalizar compra</h2>

            <form className="formulario-checkout" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingresa tu nombre" className="input-checkout" {...register("nombre")}/> <br/>
                <input type="email" placeholder="Ingresa tu e-mail" className="input-checkout" {...register("email")}/> <br/>
                <input type="phone" placeholder="Ingresa tu telefono" className="input-checkout" {...register("telefono")}/> <br/>
                <button type="submit" className="boton-checkout-comprar">Comprar</button>
            </form>
        </div>
    )
}

export default Checkout