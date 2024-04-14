import React from 'react'
import "./CreditCard.style.css"

const CreditCard = ({item}) => {
  return (
    <div className='card-wrap'>
          <img
            src={`https://media.themoviedb.org/t/p/w138_and_h175_face${item?.profile_path}`}
            className="image-area"
            alt="profile"
          />
      <div className='name'>{item?.name}</div>
      <div className='character'>{item?.character}</div>
    </div>
  )
}

export default CreditCard
