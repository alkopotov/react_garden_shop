import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProductsOnSale } from "../../asyncActions/products"
import ProductList from "../../components/ProductList"

function ProductsSalesPage() {
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchAllProductsOnSale())
    document.body.scrollIntoView()
  })

  return (
    <main>
      <ProductList/>
    </main>
  )
}

export default ProductsSalesPage