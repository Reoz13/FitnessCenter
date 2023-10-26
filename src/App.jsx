import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import "./App.css";
function App() {
  return (
    <>
      <NavBar />;
      <ItemListContainer greeting="ENTRENAR TE HACE BIEN" />
    </>
  );
}

export default App;
