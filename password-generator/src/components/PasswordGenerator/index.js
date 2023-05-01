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
  const[strength, setStrength] = useState('')

  const Generator = () => {
    passwordStrengthlogic()
    let generatedPassword = []
    let passwordSize = passwordLength
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    let Numbers = '0123456789'
    let specialChars = '!@#$%^&*()'
//     upper
// lowercase
// number
// specialChars

//if checks is empty.
if(checks.length === 0){
  for(let i = 0; i <passwordSize;i++){
    let index = Math.floor(Math.random() *26)
    generatedPassword.push(upperCase.charAt(index))
  }
  setPassword(generatedPassword.join(''))
 
}
     if(checks){ 
      console.log(checks)
      for (let i = 0; i < passwordSize; i++) {
        for(const element of checks){
          console.log(element)
          let indexLetter = Math.floor(Math.random() *26)
          let indexNumber = Math.floor(Math.random() *9)
          let indexChar = Math.floor(Math.random() *10)
          if(generatedPassword.length >= passwordSize ){
             setPassword(generatedPassword.join('')) 
             return
          }
          if(element === 'upper'){
            generatedPassword.push(upperCase.charAt(indexLetter))
          }
          if(element === 'lowercase'){
            generatedPassword.push(lowerCase.charAt(indexLetter))
          }
  
          if(element === 'number'){
            generatedPassword.push(Numbers.charAt(indexNumber))
          }
  
          if(element === 'specialChars'){
            generatedPassword.push(specialChars.charAt(indexChar))
          }
        }
        
      }


      
    }

  }


//checking password strength
  const passwordStrengthlogic = () => {
    // Hard: password contains at least one uppercase, one lowercase, one number, and one special character
//b. -----Medium: if one of the fields is missing in the password
//c. ----Easy: if two of the fields are missing in the password
    if(password.length < passwordLength){
      setStrength('Too Short')

    }

    if(checks.length === 4){
      setStrength('Hard')
    }

    if(checks.length === 3){
      setStrength('Medium')
    }

    if(checks.length ===2){
      setStrength('Easy')
    }

    
  }

  //Adding volue of password inputed
  const checkPassword = (e) => {
    let checkedPassword = e.target.value
    setPassword(checkedPassword)
  }

  //checking password length
  const onChangePasswordLength = (value) => {
    setPasswordLength(value)
  }





  
  
//handling checkbox change
  const handleCheckBox = (e) => {
    if (e.target.checked) {
      // add into the list if not already
      if (!checks.find((check) => check === e.target.value)) {
        setChecks((prev) => [...prev, e.target.value])
      }
    } else {
      // removes from the list if present already
      const filtered = checks.filter((check) => check !== e.target.value)
      setChecks((prev) => [...filtered])
    }
  }

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
          <input type="text" placeholder="your password" value={password} onChange={checkPassword} />
          <Refresh onClick={Generator}/>
        </div>
        <button className="copy-btn">
          <Copy /> Copy
        </button>
      </div>
      <span className="fw-500" >{strength}</span>
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
