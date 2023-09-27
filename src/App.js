import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">

      <header>
        <h1>Vintage del sur</h1>
        <NavBar />
      </header>

      <main>
        <ItemListContainer
          greetings="Estimado usuario, esta pagina se encuentra en creacion!"
        />
      </main>
    </div>
  );
}

export default App;
