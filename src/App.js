import React,{useEffect} from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch,useSelector} from "react-redux";
import {login,logout,selectUser} from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email:userAuth.email,
        }))
      }else{
        dispatch(logout());
      }    
    });
    return unsubscribe;
  },[dispatch]);
  return (
    <div className="app"> 
      {!user?
      (<LoginScreen/>):
      (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
      </Routes>
      </BrowserRouter>  
      
      )
      }
        {/* <HomeScreen/> */}
    </div>
  );
}

export default App;
