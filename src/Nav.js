import React from 'react';
import './Nav.css';
import Next_Movie from  './images/next_movie3.png';
import next_movie from "./images/next_moviee.png" ;
import {useState,useEffect} from 'react';
import {auth} from "./firebase";

function Nav() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = ()=>{
    if(window.scrollY > 100){
      handleShow(true);
    }else{
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll",transitionNavBar);
    return () => window.removeEventListener("scroll",transitionNavBar);
  },[])
  function logout(e){
    e.preventDefault();
    auth.signOut()
  }
  return (
    <div className={`nav ${show && 'nav__black'}`}>
     {/* <div className="nav nav__black"> */}
      <div className='nav__contents'>
       <img className='nav__logo'
        src={!show?Next_Movie:next_movie}
        // src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" 
        alt=''/>
        <button className='nav__signout' onClick={logout}
        >Sign Out</button>
       {/* <img className='nav__avatar'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJEPTWyBFmA-tV5bF0QTSH2JbM1Do6TB6Zw&usqp=CAU" 
        alt=''/> */}
      </div>
    </div>
  );
}

export default Nav;