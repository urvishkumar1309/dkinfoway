const initialState ={
    data: false,
}
export const burgerReducer =(state=initialState,action)=>{
    switch(action.type){
        case "burgerClick":
            return {
                ...state,
                data:!state.data,
            }
            default:
                return {
                    ...state,
                }
    }
}