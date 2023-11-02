import Bienvenida from "../components/presentacion/Bienvenida"
import Slider from "../components/presentacion/Slider";
import TarjetaInformacion from "../components/presentacion/TarjetaInformacion"
import Categorias from "../components/presentacion/Categorias";
import ItemListContainer from "../components/contenedores/ItemListContainer";
import TarjetaContacto from "../components/presentacion/TarjetaContacto";

function Inicio () {
    return (
        <>
            <Bienvenida />
            <TarjetaContacto />
            <Slider />
            <TarjetaInformacion />
            <Categorias />
            <ItemListContainer />
        </>
    )
}

export default Inicio 