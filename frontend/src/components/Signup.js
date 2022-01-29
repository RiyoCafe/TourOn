import React from 'react'
import Navbar from './Navbar'
import '../CSSfolder/signupstyle.css'
const Signup= () =>{
    return(
        <div>
            <Navbar/>
            <div className="container">
        <div className="form">
            <div className="heading">
                <img src="finalforsignup/img/logoproject.jpg" class="logo"/>
                <h1>Registration Form</h1>
            </div>
            <div className="wrap">

            </div>
            <div className="wrap2">

                <input type="text" placeholder="Username"/>
                <span className="focus-input2"></span>

            </div>
            <div className="wrap2">

                <input type="text" placeholder="Email"/>
                <span className="focus-input2"></span>

            </div>

            <div className="wrap2">
                {/*<label>Password</label>*/}
                <input type="password" placeholder="Password"/>
                <span className="focus-input2"></span>

            </div>
            <div className="wrap2">
                {/*<label>Confirm Passsword</label>*/}
                <input type="password" placeholder="Confirm password"/>
                <span className="focus-input2"></span>

            </div>
            <div className="wrap2">
                {/*<label>Phone Number</label>*/}
                <input type="number" placeholder="phoneNumber"/>
                <span className="focus-input2"></span>

            </div>
            <div className="wrap2">

                <input type="text" placeholder="zipcode"/>
                <span className="focus-input2"></span>

            </div>
            <div className="wrap2">

                <input type="text" placeholder="street"/>
                <span className="focus-input2"></span>

            </div>
            <div className="wrap2">

                <input type="text" placeholder="city"/>
                <span className="focus-input2"></span>

            </div>
            <div className="wrap2">

                <input type="text" placeholder="country_name"/>
                <span className="focus-input2"></span>

            </div>
            <div>

                <select name="gender" style={{marginTop:"5px",marginBottom:"10px"}}>
                    <option value="none" selected>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">other</option>
                </select>

            </div>

            <button className="btn">Register</button>

        </div>

        <div className="image">
            <img src="finalforsignup/img/hotelhero.png" class="img" alt=""/>

        </div>
    </div>
        </div>
    )
}

export default Signup