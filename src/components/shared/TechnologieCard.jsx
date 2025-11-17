import React from 'react'

export const TechnologieCard = ({iconPath, name}) => {
  return (
    <div className="technologie">
        <div>
            <div className="icon"><img src={iconPath} alt="" /></div>
            <div className="name"><h3>{name}</h3></div>
        </div>
    </div>
  )
}
