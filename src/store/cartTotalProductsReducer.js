import { idPrefix } from "..";

const defaultState = Object.keys(localStorage).filter(elem => elem.startsWith(idPrefix())).reduce((sum, elem) => {
  return sum + +localStorage.getItem(elem)
}, 0)

const GET_TOTAL_PRODUCTS_NUM = 'GET_TOTAL_PRODUCTS_NUM'

export const cartTotalProductsReducer = (state = defaultState, action) => {
  switch(action.type) {

    case GET_TOTAL_PRODUCTS_NUM:
      return Object.keys(localStorage).filter(elem => elem.startsWith(idPrefix())).reduce((sum, elem) => {
        return sum + +localStorage.getItem(elem)
      }, 0)
    default:
      return state
  }
}

export const getTotalProductsNumAction = () => ({type: GET_TOTAL_PRODUCTS_NUM})