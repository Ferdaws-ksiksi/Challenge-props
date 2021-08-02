function Item ({product}){

    console.log(product);
   
    const handelAlert=()=> {alert(product.name)}

    return(
      
        <>
          <tr>
           
           <td> <img src={product.imgSrc} onClick={handelAlert}  />  </td> 
           <td>   {product.name} </td> 
           <td>  {product.price}  </td> 

          </tr>


        </>

    )
}
export default Item; 