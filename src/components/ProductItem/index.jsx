import { formatter } from "../.."
import { BASE_URL } from "../../asyncActions/backendconfig"
import s from './ProductItem.module.css'  

function ProductItem({product}) {

  return(
    <div className={s.product_card}>
      <div style={{backgroundImage: `url(${BASE_URL + product.image})`}} className={s.product_card_image}>
        {product.discont_price !== null && <div className={s.discount_tag}>{Math.round((1 - product.discont_price / product.price) * 100)}%</div>}
      </div>
      <div className={s.product_card_description}>
        <div className={s.product_card_title}>{product.title}</div>
        <div className={s.product_card_price_field}>
          <p className={s.product_card_price_field_price}>${formatter.format(product.price)}</p>
          {product.discont_price !== null && <p className={s.product_card_price_field_discount_price}>${formatter.format(product.discont_price)}</p>}
        </div>
      </div>
    </div>
  )
}

export default ProductItem