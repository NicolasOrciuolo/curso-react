import { useState } from "react";
import Button from 'react-bootstrap/Button';

const stock = 10;

export const ItemCount = ({ onAdd }) => {
   const [count, setCount] = useState(1);

   const handleDecreaseCount = () => {
      if (count > 1) {
         setCount(prev => prev - 1);
      }
   }

   const handleIncreaseCount = () => {
      if (stock > count) {
         setCount(prev => prev + 1);
      }
   }

      return (
      <div className="itemCount">
         <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
            <Button onClick={handleDecreaseCount}>-</Button>
            <span>{count}</span>
            <Button onClick={handleIncreaseCount}>+</Button>
         </div>
         <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }} >
            <Button onClick={() => onAdd(count)} variant="outline-success">Agregar</Button>
         </div>
      </div>
   )
}