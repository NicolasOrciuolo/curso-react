import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { CartContext } from '../contexts/CartContext';
import { useState } from 'react';
import { useContext } from 'react';
import { ItemList } from './ItemList';
import { getFirestore, addDoc, collection } from 'firebase/firestore'


export const Cart = () => {
   const { items, removeItem, clear } = useContext(CartContext)

   const [formValues, setFormValues] = useState({
      name: "",
      phone: "",
      email: "",
   })

   const total = () => items.reduce((acc, val) => acc + val.quantity * val.price, 0)

   const handleChange = ev => {
      setFormValues(prev => ({
         ...prev, [ev.target.name]: ev.target.value,
      }))
   }

   const sendOrder = () => {
      const order = {
         buyer: formValues,
         items: items,
         total: total()
      }

      const db = getFirestore();
      const orderCollection = collection(db, "orders");

      addDoc(orderCollection, order).then(({ id }) => {
         if (id) {
            alert("Su orden: " + id + " ha sido completada!")
            setFormValues({
               name: "",
               phone: "",
               email: "",
            })
            clear()
         }
      })
   }

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
                           <Button variant="outline-danger" onClick={() => removeItem(item.id)}>Eliminar Producto</Button>
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

            <Form>
               <Row className="mb-3">
                  <Form.Group as={Col} md="4">
                     <Form.Label>Nombre y Apellido</Form.Label>
                     <Form.Control
                        required
                        onChange={handleChange}
                        type="text"
                        value={formValues.name}
                        name="name"
                     />
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                     <Form.Label>Teléfono</Form.Label>
                     <Form.Control
                        required
                        onChange={handleChange}
                        type="text"
                        value={formValues.phone}
                        name="phone"
                     />
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                     <Form.Label>Email</Form.Label>
                     <Form.Control
                        required
                        onChange={handleChange}
                        type="text"
                        value={formValues.email}
                        name="email"
                     />
                  </Form.Group>
               </Row>
               <Button variant="success" onClick={sendOrder}>Comprar</Button>
            </Form>
         </Container>
      </>
   )
}