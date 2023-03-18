import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>welcome to react</h1>
      <input placeholder='email'></input><br></br>
      <input placeholder='password' type='password'></input><br></br>
      <br></br>
      <button>Login</button>
      <Typography variant='h1' color='primary'>welcome to react</Typography>
      <TextField label='email' variant='standard'/><br></br>
      <TextField label='password' type='password' variant='standard'/><br></br>
      <br></br>
      <Button variant='contained' color='secondary'>Login</Button>
    </div>
  )
}

export default Login
