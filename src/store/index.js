import { applyMiddleware, combineReducers, createStore } from 'redux'
import {thunk} from 'redux-thunk'
import { productListReducer } from './productListReducer'
import { categoryListReducer } from './categoryReducer'

const rootReducer = combineReducers({
  productList: productListReducer,
  categoryList: categoryListReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))