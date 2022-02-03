import React, {useRef} from 'react'
import Navbar from './Navbar'
import {nav, setLoginName} from "../App";
import '../CSSfolder/loginstyle.css'
import {Form} from "react-bootstrap"
import {Button} from "react-bootstrap";
import './Assests/bootstrap.min.css';
import '../CSSfolder/Hover.css'
import axios from "axios";




const Login= () =>{

    const emailRef=useRef()
    const passRef=useRef()


    const loginClick=()=>{
        const email=emailRef.current.value
        const password=passRef.current.value

        axios.post('http://localhost:8080/test',{
            mail:email,
            password:password
        }).then(res=>{
            console.log(res.data)
            //setLoginName(res.data.username)
             nav('/afterlogin')
        }).catch(err=>{
            console.log(err)
        })


    }

    return(
        <div>
            <Navbar/>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail" style={{
                    width: "400px",
                    marginLeft:"25px"
                }}
                >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" style={{
                    width: "400px",
                    marginLeft:"25px"
                }} >
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{
                    display:"flex",
                    flexDirection:"row"
                }}>
                    <Form.Check type="checkbox" style={{
                        marginLeft:"15px",
                        marginTop:"15px"
                    }}/>
                    <Form.Label style={{marginLeft:"15px"}} > Remember me</Form.Label>
                </Form.Group>
                <div style={{display:"flex",alignItems:"center"}}>
                    <Button className={"a"} onClick={loginClick}  variant="primary" type="submit" style={{
                        marginLeft:"100px",
                        background:"#DFEBEE",
                        color:"black"

                    }}>
                        Submit
                    </Button>
                </div>

            </Form>


        </div>
    )
}

export default Login