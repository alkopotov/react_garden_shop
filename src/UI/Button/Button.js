import style from './Button.module.css'

function Button({title, textColor, color, ...otherProps}) {

  title = title || 'Добавить'
  textColor = textColor || 'white';
  color = color || '#339933';
  return (
    <button 
      className={style.btn_elem}
      style={{color: textColor, backgroundColor: color}}
      {...otherProps}
      >
      {title}
    </button>
  )
}

export default Button