import {ReactComponent as CartLogo} from './images/cart.svg'
import s from './CartIcon.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getTotalProductsNumAction } from '../../store/cartTotalProductsReducer'

function CartIcon() {

  const cartProducts = useSelector(store => store.totalProducts)
  const cartIds = useSelector(store => store.cartProductIds)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTotalProductsNumAction());
  }, [cartIds])

  return (
    <div className={s.cart_logo}>
      <CartLogo/>
      {cartProducts > 0 && <div className={s.items_number}>{cartProducts}</div>}
    </div>
  )
}

export default CartIcon