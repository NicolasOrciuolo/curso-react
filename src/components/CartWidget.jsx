import cart from '../assets/carrito.png';
import '../App.css';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
   const {totalWidget} = useContext(CartContext)
   return (
      <Link to="/cart">
         <img src={cart} alt="Carrito" />
         <span class="p-2 fs-5" >{totalWidget}</span>
      </Link>
   )
}