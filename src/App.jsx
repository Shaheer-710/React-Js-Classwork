import React from 'react'
import Input from './component/Input/Input'
import TextField from '@mui/material/TextField';
import Button1 from './component/Button/Button1';
import './index.css'
import Drawer1 from './component/Drawer/Drawer1'

const App = () => {
  return (
    <div style={{marginLeft:600}} className='smth'>
      <h1>Login</h1>
      <br />
      <Input />
      <br />
      <br />
      <br />
     <TextField style={{width:400}} type='Password' id="outlined-basic" label="Password" variant="outlined" /> 
     <br />
     <br />
     <Button1 />
     <br />
     <Drawer1 />

    </div>
  )
}

export default App
