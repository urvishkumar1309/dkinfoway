export const teckstackAction= (data)=> (dispatch)=>{
    console.log("data");
    dispatch({
        type:"techstack",
        payload:{
            data: data
        }
    })
}