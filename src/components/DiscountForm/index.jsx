import s from './DiscountForm.module.css'
import formPict from './images/discount_form.png'
import { useForm } from 'react-hook-form'

function DiscountForm() {

  let {
    register,
    handleSubmit,
    formState: {errors},
    reset

  } = useForm({mode: 'onSubmit'})

  let inputName = register('name', {
    required: 'Name required',
    pattern: {
      value: /^[A-Za-zА-Яа-яЕЁё]+$/,
      message: 'Only letters in name allowed'
    }
  })

  let inputPhone = register('phone', {
    required: 'Please enter phone number'
  })

  let inputEmail = register('email', {
    required: 'Please enter email',
    pattern: {
      value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/,
      message: 'Please enter valid email'
    }
  })

  const onSubmit = (data) => {
    console.log(data);
    reset()
  }
  return(
    <div className={s.wrapper}>
      <div className={s.discount_form_banner}>
        <h2 className={s.header_text}>5% off on the first order</h2>
        <div className={s.form_wrapper}>
          <img src={formPict}/>
          <form className={s.discount_form} onSubmit={handleSubmit(onSubmit)}>
            <input className={s.input_field} {...inputName} placeholder={errors.name?.message || 'Name'}/>
            <input className={s.input_field} {...inputPhone} placeholder={errors.phone?.message || 'Phone Number'}/>
            <input className={s.input_field} {...inputEmail} placeholder={errors.email?.message || 'Email'}/>
            <input type='submit' value={'Get a discount'} className={s.submit_button}></input>

          </form>
        </div>
      </div>
    </div>
  )
}

export default DiscountForm