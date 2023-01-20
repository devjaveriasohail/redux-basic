
const Reducer=(state=0,action)=>{
if(action.type==='depositMoney'){
    return state + action.payload
}
else if(action.type==='withdrawMoney'){
   return state - action.payload
}
else {
     return state;
    }
}
export default Reducer;