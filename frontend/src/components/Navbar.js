import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import {navigate, isLoggedIn,setLoginName,Setting} from '../App'
import { useNavigate } from 'react-router-dom'
import logo from '../images/logoproject.jpg'

var nav
const Navbar= (props) =>{
    nav=useNavigate();

    console.log(isLoggedIn);
    if(isLoggedIn==false)
    {
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

                            <li style={{cursor: 'pointer', marginLeft: "40px", fontFamily: 'monospace'}} className="nav-item"
                                onClick={() => {
                                    nav("/login")
                                }}>
                                LogIn
                            </li>

                            <li style={{cursor:'pointer',marginLeft:"40px",fontFamily:'monospace'}} class="nav-item" onClick={()=>{
                                //Setting(false)
                                nav("/signup")
                            }} >
                                SignUp

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
    else
    {
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

                            <li style={{cursor: 'pointer', marginLeft: "40px", fontFamily: 'monospace'}} className="nav-item"
                                onClick={() => {
                                    nav("/userProfile")
                                }}>
                                {setLoginName}
                            </li>

                            <li style={{cursor:'pointer',marginLeft:"40px",fontFamily:'monospace'}} class="nav-item" onClick={()=>{
                                Setting(false,null);
                                nav("/home")
                            }} >
                                Logout

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

}

export default Navbar

