import axios from 'axios';
export const authenticationAction= ()=>async (dispatch)=>{;
    const data=await axios.get("http://localhost:3001/api/user/login");
    if(data){
    dispatch({
        type:"Authenticated",
        payload:{
            products:data
        }
    })
}
}