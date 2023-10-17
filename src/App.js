import "./App.css";
import NavBar from "./components/presentacion/NavBar";
import Inicio from "./pages/Inicio";
import Buzos from "./pages/Buzos";
import Remeras from "./pages/Remeras"
import Pantalones from "./pages/Pantalones";
import ItemDetailContainer from "./components/contenedores/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
            <Route path="/Buzos" element={<Buzos />} />
            <Route path="/Remeras" element={<Remeras />} />
            <Route path="/Pantalones" element={<Pantalones />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </main>

      </BrowserRouter>
    </div>
  );
}

export default App;
