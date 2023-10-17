import Bienvenida from "../components/presentacion/Bienvenida"
import Slider from "../components/presentacion/Slider";
import TarjetaInformacion from "../components/presentacion/TarjetaInformacion"
import Categorias from "../components/presentacion/Categorias";
import ItemListContainer from "../components/contenedores/ItemListContainer";

function Inicio () {
    return (
        <>
            <Bienvenida />
            <Slider />
            <TarjetaInformacion />
            <Categorias />
            <ItemListContainer />
        </>
    )
}

export default Inicio 