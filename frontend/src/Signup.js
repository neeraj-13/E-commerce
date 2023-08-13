import React,{ useState,useEffect } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'


const Signup =()=>{
   
   const [name,setName] =useState("");
   const [email,setEmail] =useState("");
   const [password,setPassword] =useState("");
   const navigate = useNavigate();
  
   const setupData = {name,email,password}

// best way to handle promises is to use async  await
   const collectData =async()=>{
    console.warn(name,email,password);

    try{
    let response = await axios.post('http://localhost:5000/Register',{
        name,
        email,
        password
       // if any value is given in here then values overright ho jayega
    });
    console.log(response.data);
    } catch (error) {
      console.error(error);
    }

     
  
   
        localStorage.setItem("user",JSON.stringify(setupData))
        // localStorage.setItem("email",JSON.stringify(email))
        // localStorage.setItem("password",JSON.stringify(password))
    
    navigate('/name');/////// ye use hota ha click krke kaha redirect hona ha to yaha pe Products me hona ha
    
  }
      


//         method:'POST',
//         body:JSON.stringify({name,email,password}),
//         headers:{
//             'Content-Type':'application/json'
//             // 1 hi header default bhejna padta ha vo Content-type hota ha
//         }
//     });
//     result= await result.json()
//     console.warn(await result);
//    }

    return(
        <div className="register">
            <h1 >Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name "/>
            <input className="inputBox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email "/>
            <input className="inputBox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password"/>
            <button onClick={collectData} className="Button " type="button">Sign up</button>
        </div>
    )
}




export default Signup                  