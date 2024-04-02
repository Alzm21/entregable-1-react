import React from 'react'
import arrayPhrases from '../utils/phrases.json'
import getRandom from '../services/getRandom'
import arrayImages from '../utils/image.json'

const ButtonPhrase = ({setPhrase, setImage}) => {

    const handlePhrase = () => {
      setPhrase(getRandom(arrayPhrases))
      setImage(getRandom(arrayImages))
    }
  return (
    <div>
      <button onClick={handlePhrase} className='glowing-btn'>
        <span className='glowing-txt'>Generar Frase</span>
      </button>
    </div>
  )
}

export default ButtonPhrase