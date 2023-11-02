import "./App.css";
import NavBar from "./components/presentacion/NavBar";
import Inicio from "./pages/Inicio";
import ItemDetailContainer from "./components/contenedores/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./pages/Contacto"
import ItemListContainer from "./components/contenedores/ItemListContainer";
import Footer from "./components/presentacion/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <header>
          <NavBar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
