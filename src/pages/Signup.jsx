import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../Firebase'

const auth = getAuth(app)

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createuser = () => {
        createUserWithEmailAndPassword(auth, email, password).then(value => alert('success'))
    }
    return (
        <div className='signup-page'>
            <h1>signup page</h1>
            <label>Email</label>
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                required
                placeholder='Please Enter Email here' />
            <label>password</label>
            <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                required
                placeholder='Please Enter password here' />
            <button onClick={createuser}>signup</button>
        </div>
    )
}

export default Signup
