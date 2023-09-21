import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react';
import { ItemList } from './ItemList';

export const Cart = () => {
   const { items } = useContext(CartContext)


   return (
      <>
         <Container>
            <h1>CARRITO DE COMPRAS</h1>
            <Table striped bordered hover>
               <thead>
                  <tr class="text-center">
                     <th>Nombre</th>
                     <th>Cantidad</th>
                     <th>Precio</th>
                     <th>Total</th>
                     <th>Eliminar</th>
                  </tr>
               </thead>
               <tbody class="text-center">
                  {items.map(item => (
                     <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>$ {item.price}</td>
                        <td>$ {item.price}*{item.quantity}</td>
                     </tr>
                  ))}
               </tbody>

            </Table>
         </Container>
      </>
   )
}