import React from 'react'
import Cards from './components/Cards/Cards'
import { Data } from './Data'

const App = () => {
  return (
    <>
   

    {Data.map(e,i => {

      return  <Cards  key={i} imageUrl={e.imageUrl} description={e.description} />
    })}

    </>
  )
}

export default App