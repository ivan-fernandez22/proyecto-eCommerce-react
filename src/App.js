import "./App.css";
import NavBar from "./components/presentacion/NavBar";


function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <main>
        <h2>Bienvenidos a vintage del sur</h2>
        <h3>¿Quienes somos?</h3>
        <p>Vintage del sur es una pagina y emprendimiento creado por dos amigos, nos encontramos en "direccion"</p>
        <h3>Todos los productos</h3>
      </main>
    </div>
  );
}

export default App;
