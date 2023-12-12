import { useNavigate, useParams } from "react-router-dom"
import { fetchProductsByCategory } from "../../asyncActions/products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductList from "../../components/ProductList";

function CategoryProductsPage() {

  const {id} = useParams()
  const category = useSelector(store => store.productList)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // console.log(id)
  // console.log(category);

  useEffect(() => {
    dispatch(fetchProductsByCategory(id))
    document.body.scrollIntoView()
  }, [id])

  return (
    <div>
      {!category.title && navigate('/nofound')}
      <ProductList/>
      {/* {!category.title && navigate('/nofound')}
      <h2>{category?.title}</h2>
      {category.data?.map(elem => 
        <h1>{elem?.title}</h1>)} */}
    </div>
  )
}

export default CategoryProductsPage