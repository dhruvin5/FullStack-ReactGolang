import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        console.log(userEmail, userPassword);
        //fancy Go authentication code
    }

    const register = (e) => {
        e.preventDefault();
        //fancy Go authentication code
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
            </Link>

            <div className='login__container'>
                <h2>Sign in or create account</h2>

                <form>
                    <h5>Email</h5>
                    <input
                        type='text'
                        value={userEmail}
                        placeholder='user@email.com'
                        required
                        onChange={e => setUserEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type='password'
                        value={userPassword}
                        placeholder='Password'
                        required
                        onChange={e => setUserPassword(e.target.value)}
                    />

                    <button
                        className='login__signInButton'
                        type='submit'
                        onClick={signIn}
                    >
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button
                    className='login__registerButton'
                // onClick={register}
                >
                    Create your Amazon account
                </button>
            </div>
        </div>
    )
}

export default Login;