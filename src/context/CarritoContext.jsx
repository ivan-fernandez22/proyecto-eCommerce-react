import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext()

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || []

export const CarritoProvider = ({children}) => {

    const [carrito, setCarrito] = useState(carritoInicial)

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad }

        const newCarrito = [...carrito]
        const productoEnElCarrito = newCarrito.find((producto) => producto.id === itemAgregado.id)

        if (productoEnElCarrito) {
            productoEnElCarrito.cantidad += cantidad
        } else {
            newCarrito.push(itemAgregado)
        }
        setCarrito(newCarrito)
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const precioFinal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    return (
        <CarritoContext.Provider value={{
            carrito, 
            agregarAlCarrito, 
            cantidadEnCarrito, 
            precioFinal, 
            vaciarCarrito 
        }}>
            {children}
        </CarritoContext.Provider>
    )
}