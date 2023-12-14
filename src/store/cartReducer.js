const defaultState = []


const GET_CART_PRODUCTS = 'GET_CART_PRODUCTS'

export const cartReducer = (state = defaultState, action) => {
  switch(action.type) {
    case GET_CART_PRODUCTS:
      let productsInCart = action.payload.filter(elem => Object.keys(localStorage).includes(`${elem.id}`))
      return productsInCart.map(elem => { return {...elem, count: +localStorage.getItem(elem.id)}})
    default:
      return state
  }
}

export const getCartProductsAction = (payload) => ({type: GET_CART_PRODUCTS, payload})