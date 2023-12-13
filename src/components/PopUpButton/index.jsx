import Button from '../../UI/Button/Button'
import s from './PopUpButton.module.css'

function PopUpButton({id, active}) {
  return (
    <div className={`${s.popup_wrapper} ${active && s.active}`}>
      <Button 
        title={'Add to cart'}
        onClick={(e)=> {
        e.stopPropagation()
        e.preventDefault()
        console.log(id);
        }}
        switchBackground={true}
      />
    </div>
  )
}

export default PopUpButton