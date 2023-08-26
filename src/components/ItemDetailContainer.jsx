import Container from 'react-bootstrap/Container';



export const ItemDetailContainer = (props) => {

   const myPromise = new Promise((resolve, reject) =>
      setTimeout(() => {
         resolve(props)
      }, 2000)
   )

   myPromise.then(result => {

      console.log(result.greeting)

      return (
         <>
            <Container>
               <h1>{result.greeting}</h1>

            </Container>
         </>
      )
   }) 



}




