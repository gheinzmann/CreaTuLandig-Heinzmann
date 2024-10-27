import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';

function App() {

  const props= "BIENVENIDO A MI TIENDA"

  return (
    <>
      <NavBar />
      <ItemListContainer saludo={props}/>
    </>
  );
}

export default App
