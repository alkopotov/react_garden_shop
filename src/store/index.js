import { applyMiddleware, combineReducers, createStore } from 'redux'
import {thunk} from 'redux-thunk'
import { productListReducer } from './productListReducer'
import { categoryListReducer } from './categoryReducer'
import { productReducer } from './productReducer'
import { cartProductIdsReducer } from './cartProductIdsReducer'
import { cartReducer } from './cartReducer'
import { counterReducer } from './counterReducer'

const rootReducer = combineReducers({
  productList: productListReducer,
  categoryList: categoryListReducer,
  product: productReducer,
  cartProductIds: cartProductIdsReducer,
  cart: cartReducer,
  counter: counterReducer
},[])


export const store = createStore(rootReducer, applyMiddleware(thunk))