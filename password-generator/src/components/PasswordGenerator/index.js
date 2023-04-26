import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useState, useEffect } from 'react'
import passwordGif from '../../assets/gif/password.gif'
import { ReactComponent as Copy } from '../../assets/icons/copy.svg'
import { ReactComponent as Refresh } from '../../assets/icons/refresh.svg'
import Checkbox from '../Checkbox'
import './index.css'

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(8)
  const [password, setPassword] = useState('OFGSDFAW')
  const [checks, setChecks] = useState([])

  // const PasswordGenerator = () => {
  //   let passwordSize = password.length
  //   let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  //   let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  //   let Numbers = '0123456789'



  // }

  //taking password and checking it.
  const checkPassword = (e) => {
    let checkedPassword = e.target.value
    setPassword(checkedPassword)
  }

  const onChangePasswordLength = (value) => {
    setPasswordLength(value)
  }

  
  const handleCheckBox = (e) =>{
    // e.preventDefault()
    if (e.target.checked){
      console.log(e.target.value)
      console.log(e.target.name)
      
    // add into the list if not already
    if (!checks.find((check) => check === e.target.value)) {
    setChecks((prev) => [...prev, e.target.value])
    console.log(checks)
    }
    } else {
    // removes from the list if present already
    const filtered = checks.filter((check) => check !== e.target.value)
    setChecks((prev) => [...filtered])
    }
    
    
  }
  

  // useEffect(() => {
  //   handleCheckBox()
  // },[])

  return (
    <div className="password-wrapper">
      <div className="gif">
        <img src={passwordGif} alt="Password Gif" />
      </div>
      <div className="tac">
        <h2 className="title">PASSWORD GENERATOR</h2>
        <p className="subtitle">
          Create strong and secure passwords to keep your account safe online.
        </p>
      </div>
      <div className="password-input-wrapper">
        <div className="password-field">
          <input type="text" placeholder="your password" value={password} onChange={checkPassword}/>
          <Refresh />
        </div>
        <button className="copy-btn">
          <Copy /> Copy
        </button>
      </div>
      <span className="fw-500">Weak</span>
      <div className="slider">
        <div>
          <label id="slider-label">Password Length: </label>
          <span>{passwordLength}</span>
        </div>
        <Slider
          max={30}
          min={5}
          value={passwordLength}
          onChange={onChangePasswordLength}
          className="slider-style"
        />
      </div>
      <div className="elements">
        <Checkbox id="uppercase"     label="Uppercase"    name='upper'   value="upper"   handleCheckBox={handleCheckBox}/>
        <Checkbox id="lowercase"     label="Lowercase"     name='lowercase'    value="lowercase"  handleCheckBox={handleCheckBox } />
        <Checkbox id="numbers"       label="Numbers"         name="number"   value="number"   handleCheckBox={handleCheckBox }/>
        <Checkbox id="special chars" label="Special Characters" name="specialChars" value="specialChars"   handleCheckBox={handleCheckBox }/>
      </div>
    </div>
  )
}

export default PasswordGenerator
