import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/data";

function ItemListContainer () {

    const [productos, setProductos] = useState ([])

    const [titulo, setTitulo] = useState("productos")

    const categoria = useParams().categoria


    useEffect (() => {

        const productosCollection = collection(db, "productos")
        const q = categoria ? query(productosCollection, where("categoria", "==", categoria)) : productosCollection

        getDocs(q)
            .then((resp) => {
                setProductos (
                    resp.docs.map((doc) => {
                        return {...doc.data(), id: doc.id}
                    }),
                )
            })

    }, [categoria])

    return (
        <div>
            <ItemList productos={productos} titulo={titulo}/>
        </div>
    )
}

export default ItemListContainer