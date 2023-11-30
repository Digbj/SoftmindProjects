const Experience=({details,setDetails,msg,setMsg})=>{
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
            <input placeholder="Employer Name" value={details.emp} onFocus={Reset} onChange={(e)=>{setDetails({...details,emp:e.target.value})}}/>
            <p>{msg.memp}</p>
            <input placeholder="Designation" value={details.desig} onFocus={Reset} onChange={(e)=>{setDetails({...details,desig:e.target.value})}}/>
            <p>{msg.mdesig}</p>
            <input type='number' placeholder="Total Year of Experience" value={details.YOexp} onFocus={Reset} onChange={(e)=>{setDetails({...details,YOexp:e.target.value})}}/>
            <p>{msg.mYOexp}</p>
        </div>
    )
}
export default Experience;