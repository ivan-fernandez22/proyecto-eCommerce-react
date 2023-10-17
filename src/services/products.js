import productosData from "../mock/products.json"

export const products = () => {
    return new Promise ((resolve, reject) => {
        setTimeout ( () => {
            resolve (productosData)
        }, 2000)
    })
}

export const productPorId = (id) => {
    return new Promise ((resolve, reject) => {

        const item = productosData.find ((el) => el.id === id)

        if (item) {
            resolve (item)
        } else {
            reject ({
                error: "No se encontró el producto"
            })
        }
    })
}