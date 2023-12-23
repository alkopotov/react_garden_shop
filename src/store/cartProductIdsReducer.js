import { decodeArrayId, encodeId, idPrefix } from ".."


const defaultState = decodeArrayId(Object.keys(localStorage).filter(elem => elem.startsWith(idPrefix())))

const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
const GET_IDS_IN_CART = 'GET_IDS_IN_CART'
const DEL_PRODUCT_IN_CART = 'DEL_PRODUCT_IN_CART'
const CLEAR_STORED_PRODUCTS = 'CLEAR_STORED_PRODUCTS'

export const cartProductIdsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_PRODUCT_TO_CART:
      let currentCount = +localStorage.getItem(encodeId(action.payload.id)) || 0
      if (currentCount + action.payload.count === 0) {
        localStorage.removeItem(encodeId(action.payload.id))
      } else {
        localStorage.setItem(encodeId(action.payload.id), currentCount + action.payload.count)
      }
      return decodeArrayId(Object.keys(localStorage).filter(elem => elem.startsWith(idPrefix())))
    case GET_IDS_IN_CART:
      return decodeArrayId(Object.keys(localStorage).filter(elem => elem.startsWith(idPrefix())))
    case DEL_PRODUCT_IN_CART:
      localStorage.removeItem(encodeId(action.payload))
      return decodeArrayId(Object.keys(localStorage).filter(elem => elem.startsWith(idPrefix())))
    case CLEAR_STORED_PRODUCTS:
      localStorage.clear()
      return defaultState
    default:
      return state
  }
}

export const addProductToCartAction = (payload) => ({type: ADD_PRODUCT_TO_CART, payload})
export const getIdsInCartAction = () => ({type: GET_IDS_IN_CART})
export const delProductInCartAction = (payload) => ({type: DEL_PRODUCT_IN_CART, payload})
export const clearStoredProductsAction = () => ({type: CLEAR_STORED_PRODUCTS})
