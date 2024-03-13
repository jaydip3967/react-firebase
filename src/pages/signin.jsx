import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../Firebase'
const auth = getAuth(app);

const Signin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Signinuser = () => {
        signInWithEmailAndPassword(auth , email , password)
        .then((value) => console.log("signin success"))
        .catch((error) => {
            console.log(error);
          });
    }

    return (
        <div className='signin-page'>
            <h1>signin page</h1>
            <label>enter you email</label>
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder='enter your email here' />
            <label htmlFor="">enter your password</label>
            <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='enter your password here' />
            <button onClick={Signinuser}>signin</button>
        </div>
    )
}

export default Signin
