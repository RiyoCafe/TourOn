import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import { navigate } from '../App'
import { useNavigate } from 'react-router-dom'
import logo from '../images/logoproject.jpg'

var nav

const Navbar= () =>{
    nav=useNavigate();
    return(
        <>
            <nav  class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
      <img src={logo} alt="logo"/>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav m-auto">
    <li style={{cursor:'pointer',marginLeft:"40px",fontFamily:'monospace'}} class="nav-item" onClick={()=>{
          nav("/home")
      }} >
       Home
      </li>
      <li style={{cursor:'pointer',marginLeft:"40px",fontFamily:'monospace'}} class="nav-item" onClick={()=>{
          nav("/about")
      }} >
       About
      </li>
      <li style={{cursor:'pointer',marginLeft:"40px",fontFamily:'monospace'}} class="nav-item" onClick={()=>{
          nav("/contact")
      }} >
       Contact
      </li>
      <li style={{cursor:'pointer',marginLeft:"40px",fontFamily:'monospace'}} class="nav-item" onClick={()=>{
          nav("/login")
      }} >
       Login
      </li>
      <li style={{cursor:'pointer',marginLeft:"40px",fontFamily:'monospace'}} class="nav-item" onClick={()=>{
          nav("/signup")
      }} >
       Signup
      </li>
      <li style={{cursor:'pointer',marginLeft:"40px",fontFamily:'monospace'}} class="nav-item" onClick={()=>{
          nav("/services")
      }} >
       Services
      </li>
      
    </ul>
    
  </div>
</nav>
        </>
    )
}

export default Navbar
