import Container from 'react-bootstrap/Container';
import data from '../data/products.json'
import Spinner from 'react-bootstrap/Spinner';
import { ItemDetail } from './ItemDetail';

import { useState, useEffect } from "react";


export const ItemDetailContainer = (props) => {
   const [product, setProduct] = useState(null);

   useEffect(() => {
      const promise = new Promise((resolve, reject) => {
         setTimeout(() => resolve(data[2]), 2000);
      })

      promise.then((data) => setProduct(data));
   }, [])

   if (!product) {
      return (
         <Container>
            <div style={{textAlign: 'center', padding: '1rem'}}>
               <Spinner animation="grow" variant="primary" size="lg" />
            </div>
         </Container>
      )
   }


   return (
      <>
         <Container>
            <h1>DETALLE DEL PRODUCTO</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', padding: '1rem' }}>
               <ItemDetail product={product} />
            </div>
         </Container>
      </>
   )
}




