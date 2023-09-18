import cart from '../assets/carrito.png';
import '../App.css';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const CartWidget = () => {
   const {totalWidget} = useContext(CartContext)
   return (
      <>
         <img src={cart} alt="Carrito" />
         <span>{totalWidget}</span>
      </>
   )
}