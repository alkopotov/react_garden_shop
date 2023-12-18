import Button from '../../UI/Button/Button'
import zero from './images/cactus.png'
import { ReactComponent as Four } from './images/four.svg'
import { Link } from 'react-router-dom'
import s from './NotFoundPage.module.css'


function NotFoundPage() {
  return(
    <main className={s.wrapper}>
      <div className={s.picture}>
        <Four className={s.four}/>
        <img src={zero} alt='zero'/>
        <Four className={s.four}/>
      </div>
      <div className={s.info}>
      <h1 className={s.header_text}>Page Not Found</h1>
      <p>We’re sorry, the page you requested could not be found. Please go back to the homepage.</p>
      
      </div>
      <Link to={'/'} className={s.button}>
        <Button title={'Go Home'}/>
      </Link>
    </main>
  )
}

export default NotFoundPage