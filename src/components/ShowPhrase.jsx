import React from 'react'

const ShowPhrase = ({phrase}) => {
  return (
    <div className='text'>
      <div className="container">
      <p className='phrase_text'>"{phrase.phrase}"</p>
      </div>
      <p className='author_text'>{phrase.author}</p>
        
    </div>
    
  )
}

export default ShowPhrase