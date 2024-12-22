import React from 'react'
import { data } from './components/data'
import Cards from './components/Cards/Cards'

const App = () => {

  const myArray = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon"
  ];

  return (
    <>
      { 
        data.map((e,i) => {
          return(
        <Cards  key={i} id={e.id} imageUrl={e.imageUrl} description={e.description} />  )        
        })
}       
<select style={{
  width:455,
  padding:13,
  backgroundColor:'black',
  color:'white'
}}>
{
  myArray.map((e,i)=>{
    return  <option key={i}>{e}</option>
  })
}
</select>
    </>
  )
}

export default App