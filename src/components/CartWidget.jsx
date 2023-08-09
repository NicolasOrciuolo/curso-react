import cart from '../assets/carrito.png';
import '../App.css';

export const CartWidget = () => {
   return (
      <>
         <img src={cart} alt="Carrito" />
         <span>0</span>
      </>
   )
}