const defaultState = {}

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY';
const GET_ALL_PRODUCTS_ON_SALE = 'GET_ALL_PRODUCTS_ON_SALE';
const GET_TOP_PRODUCTS_ON_SALE = 'GET_TOP_PRODUCTS_ON_SALE';

export const productListReducer = (state = defaultState, action) => {
  switch(action.type) {
    case GET_ALL_PRODUCTS:
      return {title: 'All products', data: action.payload.map(elem => {
        elem.displayed = true;
        return elem
      })};
    case GET_PRODUCTS_BY_CATEGORY:
      return {title: action.payload.category.title, data: action.payload.data.map(elem => {
        elem.displayed = true;
        return elem
      })};
    case GET_ALL_PRODUCTS_ON_SALE:
      return {title: 'Discounted items', data: action.payload.map(elem => {
        elem.displayed = true;
        return elem
      })}
    case GET_TOP_PRODUCTS_ON_SALE:
      return {title: 'Sale', data: action.payload.map(elem => {
        elem.displayed = true;
        return elem
      }).sort((a,b) => a.discont_price / a.price - b.discont_price / b.price).slice(0,4)}
    default:
      return state
  }
}

export const getAllProductsAction = (payload) => ({type: GET_ALL_PRODUCTS, payload})
export const getProductsByCategoryAction = (payload) => ({type: GET_PRODUCTS_BY_CATEGORY, payload})
export const getAllProductsOnSaleAction = (payload) => ({type: GET_ALL_PRODUCTS_ON_SALE, payload})
export const getTopProductsOnSaleAction = (payload) => ({type: GET_TOP_PRODUCTS_ON_SALE, payload})