import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <button className='cardb'>{props.name_button}</button>
  )
}

export default Button