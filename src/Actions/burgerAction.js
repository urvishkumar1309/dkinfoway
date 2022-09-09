
export const burgerAction= ()=> (dispatch)=>{
    console.log("toggle");
    dispatch({
        type:"burgerClick",
    })
}