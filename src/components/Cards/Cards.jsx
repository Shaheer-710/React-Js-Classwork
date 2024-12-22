import React from 'react'
import PropTypes from 'prop-types'
const Cards = ({id,imageUrl, description }) => {
      return (
    <>
      <div className='cardstyle'  style={{width:500}}>
      <img src={imageUrl} alt="" />
       <h2>Id : {id}</h2>
       <p>{description}</p>
   
</div>
    </>
  )
}

Cards.propTypes ={
    id:PropTypes.number,
    h2:PropTypes.string,
    p:PropTypes.string
}


export default Cards