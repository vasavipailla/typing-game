import { useState } from "react"
import React from "react"
import Card from "./Card"
import axios from "axios"
import { useNavigate } from "react-router-dom"
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
            navigate("/")
         }
    }
    return(
        <div className="login-container">
        <Card>
            <div>
                <form className="form-container">
                <h1 className="title">Log-in</h1>
                    <label>
                        <input style={{width:"50%"}} type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                    </label>
                    <label>
                        <input style={{width:"50%",padding:"10px"}} type="password" placeholder="password"  valu={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </label>
                    <button className="login-btn" type="submit" onClick={handleSubmit} style={{width:"40%"}}><p className="text">Log-in</p></button>
                </form>
            </div>
            <div className="text1">
                <div>
                    <p>Or Sign Up Using</p>
                    <p>Sign Up</p>
                </div>
             </div>
        </Card>
    </div>
    )
}

export default Login;