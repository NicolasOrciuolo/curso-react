import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ItemCount } from './ItemCount';


export const Item = ({ product }) =>
   <div style={{ padding: '1rem' }}>
      <Card key={product.id} border="primary">
         <Card.Header>{product.category}</Card.Header>
         <Card.Img variant="top" src={product.img} style={{ height: '200px' }} />
         <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>{product.name}</Card.Title>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
               <Button variant="outline-info">Ver más</Button>
            </div>
         </Card.Body>
         <ItemCount />
      </Card>
   </div>
