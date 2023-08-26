import Container from 'react-bootstrap/Container';
import data from '../data/products.json'
import { useState, useEffect } from "react";
import { ItemList } from './ItemList';




export const ItemListContainer = (props) => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      const promise = new Promise((resolve, reject) => {
         setTimeout(() => resolve(data), 2000);
      })

      promise.then(data => setProducts(data));
   }, [])

   return (
      <>
         <Container>
            <h1>{props.greeting}</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', padding: '1rem' }}>
               <ItemList products={products} />
            </div>
         </Container>
      </>
   )
}