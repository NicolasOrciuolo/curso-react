import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';
import { CartProvider } from './contexts/CartContext';
import { Cart } from './components/Cart';
import './App.css';

function App() {
   return (
      <CartProvider>
         <BrowserRouter>
            <NavBar />
            <Routes>
               <Route path="/" element={<ItemListContainer greeting="Bienvenidos a la tienda!" />} />
               <Route path="/category/:id" element={<ItemListContainer greeting="Categorías" />} />
               <Route path="/item/:id" element={<ItemDetailContainer />} />
               <Route path="/cart" element={<Cart />} />
            </Routes>
         </BrowserRouter>
      </CartProvider>
   );
}

export default App;