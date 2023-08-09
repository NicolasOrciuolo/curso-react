import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import './App.css';



function App() {
   return (
      <>
      <NavBar />
      <ItemListContainer greeting="Hola!"/>
      </>
   );
}

export default App;