import Card from 'react-bootstrap/Card';
import { ItemCount } from './ItemCount';
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react';
import { Item } from './Item';

export const ItemDetail = ({ product }) => {
   const { addItem } = useContext(CartContext)
   const onAdd = (count) => addItem(product, count);



   return (
      <Card key={product.id} border="primary">
         <Card.Header>{product.category}</Card.Header>
         <Card.Img variant="top" src={product.img} style={{ height: '50vh', width: '50vh', alignSelf: 'center' }} />
         <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>{product.name}</Card.Title>
            <Card.Text> {product.detail}
            </Card.Text>
         </Card.Body>
         <ItemCount onAdd={onAdd} />
      </Card>
   );
}