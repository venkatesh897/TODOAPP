import React from 'react'
import './Button.css'


function Button({buttonHandler,disabled,btnTxt,isDonebtn,btnStyle}) {
  return (
    <div className='button-container'>
        <button onClick = {buttonHandler} className = {btnStyle}  >{btnTxt}</button>
    </div>
  )
}

export default Button
