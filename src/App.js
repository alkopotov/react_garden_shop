import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import CategoryPage from './pages/CategoryPage';
import CategoryProductsPage from './pages/CategoryProductsPage';
import ProductsListPage from './pages/ProductsPage';
import ProductsSalesPage from './pages/ProductsSalesPage';
import ProductItemPage from './pages/ProductItemPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/categories' element={<CategoryPage/>}/>
        <Route path='/categories' element={<CategoryPage/>}/> 
        <Route path='/category/:id' element={<CategoryProductsPage/>}/>
        <Route path='/products/all' element={<ProductsListPage/>}/>
        <Route path='/products/:id' element={<ProductItemPage/>}/>
        <Route path='/products/sales' element={<ProductsSalesPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
