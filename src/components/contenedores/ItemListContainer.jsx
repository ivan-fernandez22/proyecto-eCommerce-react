import { useEffect, useState } from "react";
import { products } from "../../services/products"
import ItemList from "./ItemList";

function ItemListContainer () {

    const [productos, setProductos] = useState ([])

    useEffect (() => {
        products ()
            .then ((res) => {
                setProductos (res)
            })
    }, [])

    return (
        <div>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer