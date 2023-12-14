import { applyMiddleware, combineReducers, createStore } from 'redux'
import {thunk} from 'redux-thunk'
import { productListReducer } from './productListReducer'
import { categoryListReducer } from './categoryReducer'
import { productReducer } from './productReducer'
import { cartProductIdsReducer } from './cartProductIdsReducer'
import { cartReducer } from './cartReducer'

const rootReducer = combineReducers({
  productList: productListReducer,
  categoryList: categoryListReducer,
  product: productReducer,
  cartProductIds: cartProductIdsReducer,
  cart: cartReducer,
},[])


export const store = createStore(rootReducer, applyMiddleware(thunk))