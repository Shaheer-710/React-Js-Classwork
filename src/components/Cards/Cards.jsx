import React from 'react'

const Cards = ({imageUrl, description }) => {
      return (
    <>
      <div className='cardstyle'  style={{width:500}}>
      <img src={imageUrl} alt="" />
       <p>{description}</p>
   
</div>
    </>
  )
}

export default Cards
