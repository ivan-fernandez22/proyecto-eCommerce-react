import "./App.css";
import Bienvenida from "./components/presentacion/Bienvenida"
import Slider from "./components/presentacion/Slider";
import NavBar from "./components/presentacion/NavBar";
import TarjetaInformacion from "./components/presentacion/TarjetaInformacion"


function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <main>
        <Bienvenida />
        <Slider />
        <TarjetaInformacion />
      </main>
    </div>
  );
}

export default App;
