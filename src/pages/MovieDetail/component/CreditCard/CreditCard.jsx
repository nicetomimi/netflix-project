import React from 'react'
import "./CreditCard.style.css"

const CreditCard = ({item}) => {
  return (
    <div className='card-wrap'>
        {item?.profile_path === null? (
            <img 
            src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg" 
            alt="null"
            className='null'/>
        ):(
    
          <img
            src={`https://media.themoviedb.org/t/p/w138_and_h175_face${item?.profile_path}`}
            className="image-area"
            alt="profile"
          />)}
      <div className='name'>{item?.name}</div>
      <div className='character'>{item?.character}</div>
    </div>
  )
}

export default CreditCard
