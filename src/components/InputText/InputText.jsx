import React from 'react'

import './InputText.css'


function InputText({inputhandler,value,keyUpHandler,inputStyle,inputContainerStyle}) {
  return (

    
        <input className={inputStyle} type = "text" placeholder='Add Todo' onChange={inputhandler} value={value} onKeyUp = {keyUpHandler} ></input>
      
    
  )
}

export default InputText
