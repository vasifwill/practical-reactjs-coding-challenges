import axios from "axios"
import classnames from "classnames"
import { ReactComponent as Button } from "../src/assets/icons/button.svg"
import { ReactComponent as Quotation } from "../src/assets/icons/quotation.svg"
import { ReactComponent as Twitter } from "../src/assets/icons/twitter.svg"
import { ReactComponent as Whatsapp } from "../src/assets/icons/whatsapp.svg"
import "./App.css"
import { useState, useEffect } from "react"


function App() {
  const [items, setItmes] = useState([])
  const [button, setButton] = useState(false)
  const [random, setRandom] = useState({word:'"I am not afraid of storms, for I am learning how to sail my ship."', author:"Louisa May Alcott"})


  

  const Forwards = async() =>{
    setButton(!button)
    let index = Math.floor(Math.random()*19)
    if(items){
      setRandom({word:items[index], author:items[index]})
    }
    

  }

  useEffect(() => {
    axios.get('db.json').then(e => setItmes(e.data.quotes))
    
  },[])
  // const Backwards = () =>{

  // }

  
 
  return (
    <>
      <header>
        <div className="top-strip" />
      </header>
      <div className="container">
        <div className="quotation-box ">
          <Quotation />
          <div className="quote">
            
           <p>{random.word}</p>
            <span>{random.author}</span>
          </div>
          <div className="bottom-navigation">
            <div>
              <Button className={classnames("rotate cp")}  />
              <Button className="cp"  onClick={Forwards}/>
            </div>
            <div className="share">
              <span>Share At:</span>
              <Twitter title="Post this quote on twitter!" className="cp" />
              <Whatsapp title="Post this quote on WhatsApp!" className="cp" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-strip" />
    </>
  )
}

export default App
