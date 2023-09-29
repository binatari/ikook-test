import React from 'react'
import './TextBox.css'
const TextBox = ({type='text', className=''}) => {
  return (
    <div className='appearance-none text-box'>
     <input placeholder='Location' className='appearance-none text-box-input' type={type}/>
    </div>
  )
}

export default TextBox