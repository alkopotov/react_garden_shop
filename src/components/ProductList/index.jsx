import { forwardRef, useEffect } from 'react'
import s from './ProductList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../ProductItem'
import { Link } from 'react-router-dom'

const ProductList = forwardRef((props, ref) => {
  const {withNav} = props
  const products = useSelector(store => store.productList)
  const dispatch = useDispatch()

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <h2 ref={ref} className={s.header_text}>{products.title}</h2>
        {(withNav) ? 
          <div className={s.header_navigation}>
            <div className={s.decoration_line}></div>
            <Link to={'/products/sales'}>
            <div className={s.navigation_button}>All Sales</div>
            </Link>
          </div>
        : ''}
      </div>

      <div className={s.product_cards_list}>
      {products.data?.map(elem => 
        <ProductItem key={elem.id} product={elem}/>)}
      </div>
    </div>
  )

})

export default ProductList