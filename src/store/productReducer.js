const defaultState = {}

const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID'

export const productReducer = (state = defaultState, action) => {
  switch(action.type) {
    case GET_PRODUCT_BY_ID:
      return {...action.payload[0], ordered: 0};
    default:
      return state
  }
}

export const getProductByIdAction = (payload) => ({type: GET_PRODUCT_BY_ID, payload}) 