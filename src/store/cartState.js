const SHOW_CART="SHOW_CART";
const HIDE_CART="HIDE_CART";

const diplayCart = (payload) => ({
  type: SHOW_CART,
  payload
});
const hideCart= (payload) => ({
  type: HIDE_CART,
  payload
});

let initialState =false;
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "SHOW_CART" : {
            console.log("the Cart is displayed")
            state=true
            return state
        }
        case "HIDE_CART" : {
            console.log("the Cart is Hidden")
            state =false
            return state;
        }
        default:
            return state;
    }
}

export{hideCart,diplayCart} ;
export default reducer;