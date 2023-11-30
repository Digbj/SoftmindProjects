const Edu=({details,setDetails,msg,setMsg})=>{
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
            <input placeholder="Highest Degree" value={details.highEdu} onFocus={Reset} onChange={(e)=>{setDetails({...details,highEdu:e.target.value})}}/>
            <p>{msg.mhighEdu}</p>
            <input placeholder="Field" value={details.field} onFocus={Reset} onChange={(e)=>{setDetails({...details,field:e.target.value})}}/>
            <p>{msg.mfield}</p>
            <input type='number' placeholder="Percentage" value={details.Perc} onFocus={Reset} onChange={(e)=>{setDetails({...details,Perc:e.target.value})}}/>
            <p>{msg.mPerc}</p>
        </div>
    )
}
export default Edu;