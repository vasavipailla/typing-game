import { useState } from "react"
import React from "react"
import Card from "./Card"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { FaFacebookSquare,FaGoogle,FaTwitter} from "react-icons/fa"
const Login =() => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const navigate = useNavigate();

    const checkUser = (users) => {
        const user = users.find((user)=>user.email===email && user.password === password);
        if (user.email === email && user.password === password) return user;
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(email=== "" || password === ""){
            alert("All filelds are required")
        }

    const user = await axios
         .get("./users")
         .then((res) => checkUser(res.data,email,password))
         .catch((error) => {
            alert("error")
         })

         if(user.email === email && user.password === password){
            navigate("/Game")
         }
    }
    return(
        <div className="login-container">
        <Card>
            <div>
                <form className="form-container">
                <h1>Log-in</h1>
                    <label>
                        <input className="login-input" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                    </label>
                    <label>
                        <input className="login-input" type="password" placeholder="password"  valu={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </label>
                    <button className="login-btn" type="submit" onClick={handleSubmit} style={{width:"40%"}}><p className="text">Log-in</p></button>
                </form>
            </div>
            <div className="text1">
                <div>
                    <p>Or Sign Up Using</p>
                <div>
                    <FaFacebookSquare className="icon"> </FaFacebookSquare>
                    <FaGoogle className="icon"></FaGoogle>
                    <FaTwitter className="icon"></FaTwitter>
                </div>
                </div>
             </div>
        </Card>
        <h2>Use this Email and Password to login</h2>
        <h3>
        "Username": "user1",
        "Email": "user1@email.com",
        "Password": "12345678",
        </h3>
    </div>
    )
}

export default Login;