import React from 'react'

export const GoBackButton = () => {
  return (
    <button
      onClick={() => history.back()}
      className='back-button'>
        
      Volver
    </button>
  )
}
