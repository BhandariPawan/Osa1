import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({teksti, handleClick}) => (
  <button onClick={handleClick}>{teksti}</button>
)

const Tilastot = ({teksti, arvo}) => (
  <div>{teksti}{arvo}</div>
)

const Keskiarvo = ({hyvä, neutraali, huono, laskuri}) => {
  const keskiarvo = ( (hyvä * 1) + (neutraali * 0) + (huono * -1) ) / laskuri

  return (<div>keskiarvo: {keskiarvo}</div>)
}

const Positiivinen = ({hyvä, laskuri}) => {
  const prosentti = (hyvä / laskuri) * 100

  return ( <div>Positiivista palautetta: {prosentti} %</div>)
}

const Tilasto = ({hyvä, neutraali, huono}) => {
  const laskuri = hyvä + neutraali + huono

  if (laskuri === 0) {
    return <p>Palautetta ei ole annettu</p>
  }

  return (
    <div>
      <Tilastot teksti="hyvä: " arvo={hyvä}/>
      <Tilastot teksti="neutraali: " arvo={neutraali}/>
      <Tilastot teksti="huono: " arvo={huono}/>
      <Keskiarvo hyvä={hyvä} neutraali={neutraali} huono={huono} laskuri={laskuri}/>
      <Positiivinen hyvä={hyvä} laskuri={laskuri}/>
    </div>
  )
}


const App = () => {
  const [hyvä, setHyvä] = useState(0)
  const [neutraali, setNeutraali] = useState(0)
  const [huono, setHuono] = useState(0)

  return (
    <div>
      <h1>Anna palautetta</h1>
      <Button teksti="hyvä " handleClick={() => setHyvä(hyvä+1)}/>
      <Button teksti="neutraali " handleClick={() => setNeutraali(neutraali+1)}/>
      <Button teksti="huono " handleClick={() => setHuono(huono+1)}/>
      <h1>Tilasto</h1>
      <Tilasto hyvä={hyvä} neutraali={neutraali} huono={huono}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)