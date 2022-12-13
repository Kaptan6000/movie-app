import React,{useState} from 'react'
import "./LoginScreen.css"
import image from '../images/next_movie3.png';
import SignUpScreen from './SignUpScreen.js';

function LoginScreen() {
  const [signIn,setsignIn] = useState(false)
  return (
    <div className='loginScreen'>
        <img className='loginScreen__logo'
        src={image} 
        alt=''/>
        <button onClick={()=> setsignIn(true)} className='loginScreen__button'>
            Sign In
        </button>
        <div className='loginScreen__gradient'/>
        <div className='loginScreen__body'>
            {signIn?(
                <SignUpScreen/>
            ):(
                <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
                Ready to watch? Enter your email to create
                or restart your membership
            </h3>
            <div className='loginScreen__input'>
                <form>
                    <input type="email" placeholder='Email Address'/>
                    <button 
                    onClick={()=> setsignIn(true)}
                    className='loginScreen__getStarted'>GET STARTED</button>
                </form>
            </div>
            </>

            )}
            
            
        </div>
    </div>
  )
}

export default LoginScreen