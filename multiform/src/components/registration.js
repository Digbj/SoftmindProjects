// import { useState } from "react"
const Regist=({details,setDetails,msg,setMsg})=>{
const Reset=()=>{
    setMsg({
        mname:"",
        memail:"",
        mphNum:"",
        mDOB:"",
        mpass:"",
        mcpass:"",
        madd1:"",
        madd2:"",
        mstate:"",
        mpin:"",
        mhighEdu:"",
        mfield:"",
        mPerc:"",
        memp:"",
        mdesig:"",
        mYOexp:""
      })
}
    return(
        
         <div>
            <input placeholder="Full Name" value={details.name} onFocus={Reset} onChange={(e)=>{setDetails({...details,name:e.target.value})}}/>
            <p id="m">{msg.mname}</p>
            <input placeholder="Email Id" type='email' onFocus={Reset} value={details.email} onChange={(e)=>{setDetails({...details,email:e.target.value})}}/>
            <p id="m">{msg.memail}</p>
            <input type='number' placeholder="Phone Number"  onFocus={Reset} onChange={(e)=>{setDetails({...details,phNum:e.target.value})}}/>
            <p id="m">{msg.mphNum}</p>
            <div className="dob">
                <label>D.O.B:-</label>
                <input type="date" placeholder="DOB"  onChange={(e)=>{setDetails({...details,DOB:e.target.value})}}/>
            </div>
            <div className="m"><p id="m">{msg.mDOB}</p></div>
            
            <input type='password' placeholder="Password" onFocus={Reset} onChange={(e)=>{setDetails({...details,pass:e.target.value})}}/>
            <p id="m">{msg.mpass}</p>
            <input type='password' placeholder="Confirm-Password" onFocus={Reset}  onChange={(e)=>{setDetails({...details,cpass:e.target.value})}}/>
            <p id="m">{msg.mcpass}</p>
      
        </div>
        
       
       
    )
}
export default Regist;