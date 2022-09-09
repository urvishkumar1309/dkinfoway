const initialState ={
    techdata: [],
}
export const teckstackReducer =(state=initialState,action)=>{
    switch(action.type){
        case "techstack":
            return {
                ...state,
                techdata:action.payload.data,
            }
            default:
                return {
                    ...state,
                }
    }
}