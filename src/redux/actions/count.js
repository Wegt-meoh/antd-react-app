import { INCREMENT , DECREMENT} from "../constantStore";

export const incrementAction=(data)=>({type:INCREMENT,data:data})
export const decrementAction=(data)=>({type:DECREMENT,data:data})