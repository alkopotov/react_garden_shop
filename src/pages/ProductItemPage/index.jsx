import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchProductByID } from "../../asyncActions/product"
import s from './ProductItemPage.module.css'
import { BASE_URL } from "../../asyncActions/backendconfig"
import { formatter } from "../.."
import Button from "../../UI/Button/Button"

function ProductItemPage() {
  const {id} = useParams()
  const product = useSelector(store => store.product)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchProductByID(id))
    document.body.scrollIntoView()
  }, [id])

  console.log(product);
  return(

    <main className={s.wrapper}>
      <div className={s.image_container} style={{backgroundImage: `url(${BASE_URL + product.image})`}}>
        {/* <img src={BASE_URL + product.image} className={s.main_image}/> */}
      </div>
      
      <div className={s.product_info}>
        <h1 className={s.product_title}>{product?.title}</h1>
        <div className={s.product_price_info}>
          <div className={s.product_price_section}>
            <p className={s.product_price}>${product.discont_price ? formatter.format(product.discont_price) : formatter.format(product.price)}</p>
            {product.discont_price &&
              <p className={s.initial_price}>${formatter.format(product.price)}</p>
            }
          </div>
          {product.discont_price &&
              <div className={s.discount_tag}>{Math.round((1 - product.discont_price / product.price) * 100)}%</div>
            }
        </div>
        <div>
          <Button title={'Add to cart'} color={'#393'}/>
        </div>
        <h2 className={s.description_title}>Description</h2>
        <p className={s.product_description}>{product.description}</p>
      </div>
    </main>
  )
}

export default ProductItemPage