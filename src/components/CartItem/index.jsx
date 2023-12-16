import { BASE_URL } from '../../asyncActions/backendconfig'
import s from './CartItem.module.css'
import { ReactComponent as Plus } from './images/plus.svg'
import { ReactComponent as Minus } from './images/minus.svg'
import { ReactComponent as Close } from './images/close.svg'
import { formatter } from '../..'


function CartItem({product}) {

  return (
    <div className={s.wrapper}>
      <div className={s.image_wrapper}>
        <div className={s.product_image} style={{backgroundImage: `url(${BASE_URL + product.image})`}}></div>
      </div>

      <div className={s.product_info}>
        <p className={s.product_title}>{product.title}</p>

        <div className={s.price_counter_area}>
          <div className={s.counter}>
            <div className={s.less_button} onClick={() => {}}><Minus/></div>
            <div className={s.counter_value}>{product.count}</div>
            <div className={s.more_button} onClick={()=> {}}><Plus/></div>
          </div>

          <div className={s.product_price_info}>
            <div className={s.product_price_section}>
              <p className={s.product_price}>${product.discont_price ? formatter.format(product.discont_price * product.count) : formatter.format(product.price * product.count)}</p>
                {product.discont_price &&
                <p className={s.initial_price}>${formatter.format(product.price * product.count)}</p>
              }
            </div>
          </div>
        </div>
      </div>
      <Close className={s.close_button}/>
    </div>
  )
}

export default CartItem