
import React from "react";
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
var navigate=null;
var nav;

const App=()=>
{
    nav=useNavigate();
  
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
export {navigate,nav}