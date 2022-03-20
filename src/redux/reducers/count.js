export default function countReducer(prevState=0,action){    
    const {type,data}=action
    console.log(prevState,type,data)
    switch(type){
        case 'increment':
            return prevState+data
        case 'decrement':
            return prevState-data
        default:
            return prevState
    }
}