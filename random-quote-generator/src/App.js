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
  const [random, setRandom] = useState({})
  const [prevIndex, setPrevIndex] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  const Forwards = () => {
    setButton(!button)
    setPrevIndex(currentIndex)
    let index = Math.floor(Math.random() * 19)
    setCurrentIndex(index)
    if (items) {
      setRandom({ word: items[index].quote, author: items[index].author })
    }
  }

  const backward = () => {
    setRandom({
      word: items[prevIndex].quote,
      author: items[prevIndex].author,
    })
  }

  useEffect(() => {
    axios.get("db.json").then((e) => {
      setRandom({
        word: e.data.quotes[0].quote,
        author: e.data.quotes[0].author,
      })

      setItmes(e.data.quotes)
    })
  }, []) // empty array means, no depency at all. This will execute only in the first rendering for component.
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
              <Button className={classnames("rotate cp")} onClick={backward} />
              <Button className="cp" onClick={Forwards} />
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
