const Child = (props) => {
   console.log(props)
   return <h1>{props.title}</h1>
}

export default function Father() {

   const click = () => alert();

   return (
      <>
         <Child title="Aguante las props" />
         <Child title="Odio las props" />
      </>
   )

}