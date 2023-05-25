import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const Register = () => {
    const[username,setUsername] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const checkEmail = (users) => {
        const user= users.find((user) => user.email === email);
        if (user) return user;
    }
    const handleSubmit = async () => {
         if( username=== "" ||email=== "" || password === ""){
          alert("All filelds are required")
      }
        const user = await axios
        .get("/users")
        .then((res) => checkEmail(res.data,email));

        if(user){
            alert ("User already exists");
        }else {
            const user= {username,email,password};
            axios.post("/users",user).then (alert("Sucessfuly account created"))
        }

    };


    return (
         <div 
             className="container-2">
          <form className="R-form">
            <h1>Register</h1>

            <label htmlFor="name">Full Name</label>
               <input
                 type="text"
                 placeholder="Name"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
               />
           
             <label htmlFor="email">Email</label>
               <input
                 type="text"
                 placeholder="Email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
               />
          
            <label htmlFor="password">Password</label>
               <input
                 type="password"
                 placeholder="Password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
               />
           
            <button  type="submit" onClick={handleSubmit}>
                 <p className="rgstr-btn">Register</p>
            </button>
            <Link to = "/login">
            <button  type="submit" className="btn-2" >
                 <h3 style={{color:"black"}}>Already have an account? Login here.</h3>
            </button>
            </Link>
          </form>
        </div>
    )
};

export default Register;