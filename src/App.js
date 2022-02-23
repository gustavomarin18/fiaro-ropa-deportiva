import "./App.css";

import NavBar from "./components/Navbar/NavBar";
import cartContext from "./context/cartContext";

import Rutas from "./Routes";

function App() {
  return (
    <div className="App">
      <header>
        <cartContext>
          <Rutas />
        </cartContext>
      </header>
    </div>
  );
}

export default App;
