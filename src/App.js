import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/Navbar/NavBar";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <ItemListContainer
          greetings={"Este va a ser el ListContainer "}
        />
      </header>
    </div>
  );
}

export default App;
