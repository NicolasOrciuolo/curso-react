import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { ItemList } from './ItemList';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'

export const ItemListContainer = (props) => {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);
   const { id } = useParams();

   useEffect(() => {
      const db = getFirestore()

      const refCollection = id
         ? query(collection(db, "products"), where("category", "==", id))
         : collection(db, "products")

      getDocs(refCollection).then(snapshot => {
         if (snapshot.size === 0) setProducts([])
         else {
            setProducts(
               snapshot.docs.map(doc => ({
                  id: doc.id, ...doc.data()
               }))
            )
         }
      }).finally(() => {
         setLoading(false);
      })
   }, [id])

   if (loading) {
      return (
         <>
            <Container>
               <div style={{ textAlign: 'center', padding: '1rem' }}>
                  <Spinner animation="grow" variant="primary" size="lg" />
               </div>
            </Container>
         </>
      )
   }

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