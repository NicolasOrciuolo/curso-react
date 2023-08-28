import Card from 'react-bootstrap/Card';


export const ItemDetail = ({product}) => (
      <Card key={product.id} border="primary">
         <Card.Header>{product.category}</Card.Header>
         <Card.Img variant="top" src={product.img} style={{ height: '50vh', width: '50vh', alignSelf: 'center' }} />
         <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>{product.name}</Card.Title>
            <Card.Text> {product.detail}
            </Card.Text>
         </Card.Body>
      </Card>
)