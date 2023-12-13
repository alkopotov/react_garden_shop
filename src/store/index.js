import { applyMiddleware, combineReducers, createStore } from 'redux'
import {thunk} from 'redux-thunk'
import { productListReducer } from './productListReducer'
import { categoryListReducer } from './categoryReducer'
import { productReducer } from './productReducer'

const rootReducer = combineReducers({
  productList: productListReducer,
  categoryList: categoryListReducer,
  product: productReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))