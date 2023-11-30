import React from "react";
import { useState } from "react";

const Home=()=>{
    const [log,setLog]=useState(true)
    const [msg,setmsg]=useState('')
    const [reg,setReg]=useState({
        rname:'',
        remail:'',
        rpassword:'',
        rcpassword:''
    })
    const [login,setLogin]=useState({
        lname:'',
        lpassword:'',
    })

const Login=()=>{
console.log("hello from login")
if(!login.lname||!login.lpassword){
    setmsg("Enter The Credentials")
}else{
    setmsg('')
    console.log(login)
}
}
const Register=()=>{

if(!reg.rname||!reg.remail||!reg.rpassword||!reg.rcpassword){
    setmsg("Enter the Credentials")
}else if(reg.rpassword!==reg.rcpassword){
    setmsg("Password Not Matched");
}else{
    setmsg("")
    console.log(reg)
    console.log("hello from register")
}
}
    return(
        <div className="mainp">

        <h3>Welcome to e-Shop Page</h3>
        {
          log?(<div className="auth" >
          <div className="login" >
              <input placeholder="E-Mail" type='text'  onBlur={(e)=>setLogin({...login,lname:e.target.value})}/>
              <input placeholder="Password" type='password' onBlur={(e)=>setLogin({...login,lpassword:e.target.value})}/>
              <button className="btn" onClick={Login}>Login</button>
          </div>
      <p>New User Click <span className="switch" onClick={()=>{setLog(false)}}>Here</span> </p>

      </div>):(<div className="auth">
        <div className="regis" >
                <input placeholder="Name" onBlur={(e)=>setReg({...reg,rname:e.target.value})}/>
                <input placeholder="E-mail" type='email'  onBlur={(e)=>setReg({...reg,remail:e.target.value})}/>
                <input placeholder="Password" type='password'  onBlur={(e)=>setReg({...reg,rpassword:e.target.value})}/>
                <input placeholder="Confirm-Password" type='password' onBlur={(e)=>setReg({...reg,rcpassword:e.target.value})}/>
                <button className="btn" onClick={Register} >Register</button>
            </div>
        <p>Already Registered click <span className="switch" onClick={()=>{setLog(true)}}>Here</span> </p>
        </div>)  
        }
        <p>{msg}</p>
        
       
        </div>
    )
}
export default Home;