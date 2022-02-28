import "./App.css";


import CartContext from "./context/CartContext";

import Rutas from "./Routes";

function App() {
  return (
    <div className="App">
      <header>
        <CartContext>
          <Rutas />
        </CartContext>
      </header>
    </div>
  );
}

export default App;
