const defaultState = Object.keys(localStorage)

const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
const GET_IDS_IN_CART = 'GET_IDS_IN_CART'

export const cartProductIdsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_PRODUCT_TO_CART:
      localStorage.setItem(action.payload.id, action.payload.count)
      return Object.keys(localStorage)
    case GET_IDS_IN_CART:
      return Object.keys(localStorage)
    default:
      return state
  }
}

export const addProductToCartAction = (payload) => ({type: ADD_PRODUCT_TO_CART, payload})
export const getIdsInCartAction = () => ({type: GET_IDS_IN_CART})
