import axios from 'axios';
export const productAction= ()=>async (dispatch)=>{
    const data=await axios.get("http://localhost:3001/api/product");
    if(data){
    dispatch({
        type:"FETCH_PRODUCT",
        payload:{
            products:data
        }
    })
}
}