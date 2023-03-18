import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <TextField label='First name' variant='standard'/><br></br>
      <TextField label='Last name' variant='standard'/><br></br>
      <TextField label='Email' variant='standard'/><br></br>
      <TextField label='Password' type='password' variant='standard'/><br></br>
      <Button variant='contained' color='primary'>Login</Button>
      <br></br>
    </div>
  )
}

export default Signup
