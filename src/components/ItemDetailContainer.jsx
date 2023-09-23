import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { useState, useEffect } from "react";
import { getFirestore, getDoc, doc } from 'firebase/firestore'

export const ItemDetailContainer = () => {
   const [product, setProduct] = useState(null);
   const [loading, setLoading] = useState(true);

   const { id } = useParams();

   useEffect(() => {
      const db = getFirestore()

      const refDoc = doc(db, "products", id)

      getDoc(refDoc).then(snapshot => {
         setProduct({ id: snapshot.id, ...snapshot.data() })
      }).finally(() => setLoading(false))
   }, [])

   if (loading) {
      return (
         <Container>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
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




