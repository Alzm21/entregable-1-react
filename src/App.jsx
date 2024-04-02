import { useState } from 'react'
import './App.css'
import getRandom from './services/getRandom'
import arrayPhrases from './utils/phrases.json'
import ShowPhrase from './components/ShowPhrase'
import ButtonPhrase from './components/ButtonPhrase'
import arrayImages from './utils/image.json'

function App() {

  const [phrase, setPhrase] = useState(getRandom(arrayPhrases))

  const [image, setImage] = useState(getRandom(arrayImages
  ))

  const objStyles = {
    backgroundImage: `url(../fortuna-2/fondo${image}.png)`,
  }

  return (
    <section className='app_container' style={objStyles}>
      <div className="app_title">
        <h1>¡Galletas de la Fortuna!</h1>
      </div>
      <ButtonPhrase
        setPhrase={setPhrase}
        setImage={setImage}
      />
      <ShowPhrase
      phrase={phrase}
      />
      
    </section>
    
  )
}

export default App
