import React, { useState } from 'react'
import { getAuth } from 'firebase/auth'
import {app} from '../Firebase'

const auth = getAuth(app)

const Signup = () => {

    const [ email , setEmail] = useState('')
    const [password , setPassword] = useState('')

  return (
    <div className='signup-page'>
      <label>Email</label>
      <input type="email" required placeholder='Please Enter Email here' />
      <label>password</label>
      <input type="password" required placeholder='Please Enter password here' />
    </div>
  )
}

export default Signup
