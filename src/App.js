import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/Navbar/NavBar";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <ItemListContainer
          greetings={"Hola soy Gustavo esta es va a ser mi tienda de ropa"}
        />
      </header>
    </div>
  );
}

export default App;
