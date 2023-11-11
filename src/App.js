import "./App.css";
import Inicio from "./pages/Inicio";
import ItemDetailContainer from "./components/contenedores/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./pages/Contacto"
import ItemListContainer from "./components/contenedores/ItemListContainer";
import Carrito from "./pages/Carrito"
import Footer from "./components/presentacion/Footer";
import { CarritoProvider } from "./context/CarritoContext";
import BasicExample from "./components/presentacion/NavBarBootstrap";
import Checkout from "./components/contenedores/Checkout";


function App() {
  return (
    <div className="App">
      <CarritoProvider>
        <BrowserRouter>

          <header>
            <BasicExample />
          </header>

          <main>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/productos" element={<ItemListContainer />} />
              <Route path="/productos/:categoria" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/Contacto" element={<Contacto />} />
              <Route path="/Carrito" element={<Carrito />} />
              <Route path="/Checkout" element={<Checkout />} />
            </Routes>
          </main>

          <footer>
            <Footer />
          </footer>

        </BrowserRouter>
      </CarritoProvider>
    </div>
  );
}

export default App;
