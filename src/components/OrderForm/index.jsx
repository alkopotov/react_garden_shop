import { useDispatch } from 'react-redux'
import { formatter } from '../..'
import s from './OrderForm.module.css'
import { useForm } from 'react-hook-form'
import { displayOrderModalAction } from '../../store/modalReducer'
import { clearCartAction } from '../../store/cartReducer'
import { clearStoredProductsAction } from '../../store/cartProductIdsReducer'

function OrderForm({orderItems, orderSum}) {

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
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(displayOrderModalAction());
    dispatch(clearCartAction())
    dispatch(clearStoredProductsAction())
    reset()
  }
  return(
    <div className={s.wrapper}>
      <div className={s.order_details}>
        <h2 className={s.form_title}>Order details</h2>
        <div className={s.order_finance_details}>
          <p className={s.items_number}>{orderItems} {orderItems === 1 ? 'item':'items'}</p>
          <div className={s.order_sum_field}>
            <p className={s.order_sum_title}>Total</p>
            <p className={s.order_sum_value}>${formatter.format(orderSum)}</p>
          </div>
        </div>
      </div>
      <div className={s.form_wrapper}>
          <form className={s.discount_form} onSubmit={handleSubmit(onSubmit)}>
            <input className={s.input_field} {...inputName} placeholder={errors.name?.message || 'Name'}/>
            <input className={s.input_field} {...inputPhone} placeholder={errors.phone?.message || 'Phone Number'}/>
            <input className={s.input_field} {...inputEmail} placeholder={errors.email?.message || 'Email'}/>
            <input type='submit' value={'Order'} className={s.submit_button}></input>
          </form>
        </div>
    </div>
  )
}

export default OrderForm