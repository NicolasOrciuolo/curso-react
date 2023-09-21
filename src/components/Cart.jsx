import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react';
import { ItemList } from './ItemList';
import Button from 'react-bootstrap/esm/Button';

export const Cart = () => {
   const { items, removeItem, clear } = useContext(CartContext)

   const total = () => items.reduce((acc, val) => acc + val.quantity * val.price, 0)

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
                     <th>Eliminar</th>
                  </tr>
               </thead>
               <tbody class="text-center">
                  {items.map(item => (
                     <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>$ {item.price}</td>
                        <td>
                           <Button variant="danger" onClick={() => removeItem(item.id)}>Eliminar Producto</Button>
                        </td>
                     </tr>
                  ))}
               </tbody>
               <tfoot class="text-center">
                  <tr>
                     <td colSpan={2}>Total</td>
                     <td>$ {total()}</td>
                     <td>
                        <Button variant="danger" onClick={() => clear()}>Vaciar Carrito</Button>
                     </td>
                  </tr>
               </tfoot>

            </Table>
         </Container>
      </>
   )
}