import { useDispatch } from "react-redux"
import s from './Filter.module.css'
import { useRef } from "react"



function Filter({withCheckbox}) {

  const formRef = useRef()
  const dispatch = useDispatch()
  
  function filterHandler(e) {
    let filterData = new FormData(formRef.current);
    let data = Object.fromEntries(filterData);
    data.discount_only = data.discount_only ? true : false
    data.min = isNaN(data.min) ? 0 : +data.min
    console.log(data);

  }

  return (
    <div className={s.wrapper}>
     <form className={s.filter_form} ref={formRef} onChange={filterHandler} >
      <label> Price
        <input type="text" name="min" placeholder="from" className={s.price_input}/>
        <input type='text' name="max" placeholder="to" className={s.price_input}/>
      </label>
      {withCheckbox && <label> Discounted Items
        <input type="checkbox" name="discount_only" className={s.check_box}/>
      </label>}
        
      <label> Sorted by
        <select name='filter' className={s.select_filter}>
          <option value='default'>default</option>
          <option value='name_asc'>name: a-z</option>
          <option value='name_desc'>name: z-a</option>
          <option value='price_asc'>price: high-low</option>
          <option value='price_desc'>price: low-high</option>
        </select>
      </label>
     </form>

    </div>
  )
}

export default Filter