import bannerPict from './images/banner_image.jpg'
import s from './Banner.module.css'
import Button from '../../UI/Button/Button'
import { forwardRef } from 'react'



// const Banner = forwardRef((props, ref) => {
//   const {autoScroll} = props 
//   return(
//     <div style={{backgroundImage: `url(${bannerPict})`}} className={s.banner} ref={ref}>
//       <h1 className={s.header_text}>Amazing Discounts on Garden Products</h1>
//       <Button title='Check out' onClick={() => autoScroll()}/>
//     </div> 
//   )
// })



function Banner({autoScroll}) {
  return(
    <div style={{backgroundImage: `url(${bannerPict})`}} className={s.banner}>
      <h1 className={s.header_text}>Amazing Discounts on Garden Products</h1>
      <Button title='Check out' onClick={() => autoScroll()}/>
    </div>
    
  )
}

export default Banner