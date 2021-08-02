import Item from "./item";

function ItemList  ({itemArray}){

    return(
      
        <div>
 <table>


<thead>

<tr>
   <td> Photo </td>
   <td>  name </td>
   <td> Price </td>


</tr>

</thead>


<tbody>
{itemArray.map(item=> <Item product = {item} />)}
</tbody>



 </table>
    
    

        </div>

 )
}
export default ItemList;  