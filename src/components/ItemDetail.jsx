import Card from 'react-bootstrap/Card';
import { ItemCount } from './ItemCount';
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react';

export const ItemDetail = ({ product }) => {
   const { addItem } = useContext(CartContext)
   
   const onAdd = count => addItem(product, count);

   return (
      <Card border="primary">
         <Card.Header>{product.category}</Card.Header>
         <Card.Img variant="top" src={product.img} style={{ height: '50vh', width: '50vh', alignSelf: 'center' }} />
         <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>{product.name}</Card.Title>
            <Card.Text> {product.detail} </Card.Text>
            <Card.Text> Stock: {product.stock} </Card.Text>
            <Card.Text> Precio: ${product.price} </Card.Text>
         </Card.Body>
         <ItemCount stock={product.stock} onAdd={onAdd} />
      </Card>
   );
}