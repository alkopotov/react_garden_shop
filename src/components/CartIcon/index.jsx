import {ReactComponent as CartLogo} from './images/cart.svg'
import s from './CartIcon.module.css'

function CartIcon() {
  return (
    <div className={s.cart_logo}>
      <CartLogo/>
      <div className={s.items_number}>12</div>
    </div>
  )
}

export default CartIcon