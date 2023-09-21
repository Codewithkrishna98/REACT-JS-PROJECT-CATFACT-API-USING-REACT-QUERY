import {useQuery} from "@tanstack/react-query";
import Axios from  "axios";


export const Home =( )=>{
const {data, refetch,isLoading}=useQuery(  ["cat"],() => {

return Axios.get("https://catfact.ninja/fact").then((res)=>res.data)

} );

if (isLoading) {
    return <h2> Loading...</h2>
}
return <h1> Random Cats Facts  <p>{ data?.fact  }</p> 

<button onClick={refetch}>  Update Data </button>
</h1>

};