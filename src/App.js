import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';
import './App.css';
import { CartProvider } from './contexts/CartContext';
import { getFirestore, getDocs, collection } from 'firebase/firestore'


function App() {
   return (
      <CartProvider>
         <BrowserRouter>
            <NavBar />
            <Routes>
               <Route path="/" element={<ItemListContainer greeting="Bienvenidos a la tienda!" />} />
               <Route path="/category/:id" element={<ItemListContainer greeting="Categorías" />} />
               <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
         </BrowserRouter>
      </CartProvider>
   );
}

export default App;