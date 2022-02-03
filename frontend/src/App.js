
import React, {useState} from "react";
import axios from "axios";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Redirect,
 useNavigate
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Services from "./components/Services";
import AfterLogin from "./components/AfterLogin";
import AfterSearchFromHome from "./components/AfterSearchFromHome";
var navigate=null;
var nav;
var setLoginName;
const App=()=>
{
    nav=useNavigate();
    // const[username,setUsername]=useState(null);
    // setLoginName=setUsername
  
  return(
    <>
       <Routes>
           <Route element={ <Navbar/> } />
         <Route exact path="/" element={ <Home/> } />
         <Route exact path="/home" element={ <Home/> } />
         <Route exact path="/about" element={ <About/>} />
         <Route exact path="/login" element={<Login/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/signup" element={<Signup/>} /> 
        <Route exact path="/services" element={<Services/>} />
           <Route exact path="/afterlogin" element={<AfterLogin/>}/>
           <Route exact path="/afterSearchFromHome" element={<AfterSearchFromHome/>}/>
        
        
       
         </Routes>



    {/* <Route path="/">
      <Home/>
    </Route>
    <Route path="/about">
      <About/>
    </Route>
    <Route path="/contact">
      <Contact/>
    </Route>
    <Route path="/login">
      <Login/>
    </Route>
    <Route path="/signup">
      <Signup/>
    </Route>   */}
    
    </>
  )
}

export default App;
export {navigate,nav,setLoginName}