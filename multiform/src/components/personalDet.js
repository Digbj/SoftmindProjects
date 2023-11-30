const PersonalDet=({details,setDetails,msg,setMsg})=>{
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
            <input placeholder="Address 1" value={details.add1} onFocus={Reset} onChange={(e)=>{setDetails({...details,add1:e.target.value})}}/>
            <p>{msg.madd1}</p>
            <input placeholder="Address 2" value={details.add2} onFocus={Reset} onChange={(e)=>{setDetails({...details,add2:e.target.value})}}/>
            <p>{msg.madd2}</p>
            <input placeholder="State" value={details.state} onFocus={Reset} onChange={(e)=>{setDetails({...details,state:e.target.value})}}/>
            <p>{msg.mstate}</p>
            <input type='number' placeholder="Pincode" value={details.pin} onFocus={Reset} onChange={(e)=>{setDetails({...details,pin:e.target.value})}}/>
            <p>{msg.mpin}</p>
        </div>
    )
}
export default PersonalDet;