import { configureStore} from '@reduxjs/toolkit'
import cartReducer from "./cart";
import displayReducer from "./cartState"

// const reducer = combineReducers({
//     cart:cartReducer
// });
const store = configureStore({
  reducer:{
     cart: cartReducer,
     dispay:displayReducer
  }
})
//const store = configureStore(reducer);

export default store

