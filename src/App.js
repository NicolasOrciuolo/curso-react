import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';

import { NavBar } from './components/NavBar';
import './App.css';



function App() {
   return (
      <>
         <BrowserRouter>
            <NavBar />
            <Routes>
               <Route path="/" element={<ItemListContainer greeting="Bienvenidos a la tienda!" />} />
               <Route path="/category/:id" element={<ItemListContainer greeting="Categorías" />} />
               <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;