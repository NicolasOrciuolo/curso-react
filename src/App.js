import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import './App.css';
import { Routes, Route, Link, NavLink } from "react-router-dom";



function App() {
   return (
      <>
      <NavBar />
      <ItemListContainer greeting="Hola!"/>
      </>
   );
}

export default App;