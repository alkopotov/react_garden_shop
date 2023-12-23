import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createHashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

const router = createHashRouter([
  {
    path: '/*',
    element: <App/>
  }
])

export function idPrefix() {
  return 'GarShopProductItem'
}

export const formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

export function encodeId(id){
  return idPrefix() + id
}

export function decodeId(id){
  return +id.slice(idPrefix().length)
}

export function decodeArrayId(array){
  return array.map(elem => +decodeId(elem))
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
);
