import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Item = ({ product }) => 
   <div style={{ padding: '1rem' }}>
      <Card key={product.id} border="primary">
         <Card.Header>{product.category}</Card.Header>
         <Card.Img variant="top" src={product.img} style={{ height: '200px' }} />
         <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>{product.name}</Card.Title>
            <Card.Body style={{ textAlign: 'center' }}>Precio: ${product.price}</Card.Body>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <Link to={`/item/${product.id}`}>
                  <Button variant="outline-info">Ver más</Button>
               </Link>
            </div>
         </Card.Body>
      </Card>
   </div >
