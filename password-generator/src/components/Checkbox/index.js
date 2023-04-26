import './index.css'
import React, { useState } from'react'

const Checkbox = ({ id, label,  handleCheckBox, value, name}) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleChecked = (e) => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="checkbox-wrapper">
      <input id={id} type="checkbox" checked={isChecked} name={name} value={value}  onClick={handleChecked} onChange={handleCheckBox} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Checkbox
