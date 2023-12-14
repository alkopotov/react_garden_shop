import { Link } from 'react-router-dom'
import s from './CartPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchCartProducts } from '../../asyncActions/products'
function CartPage() {

  const cartProducts = useSelector(store => store.cart)
  const dispatch = useDispatch()

  const cartProductsIds = useSelector(store => store.cartProductsIds)

  useEffect(()=> {
   dispatch(fetchCartProducts()) 
  },[cartProductsIds])

  console.log(cartProducts)
  return (
    <main className={s.wrapper}>
      <div className={s.header}>
        <h1 className={s.header_text}>Shopping Cart</h1>
        <div className={s.header_navigation}>
            <div className={s.decoration_line}></div>
            <Link to={'/products/all'}>
            <div className={s.navigation_button}>Back to the store</div>
            </Link>
        </div>
      </div>
    </main>
  )
}

export default CartPage