import {useState} from "react"
import Regist from "./registration";
import PersonalDet from "./personalDet";
import Edu from "./educ";
import Experience from "./experience";
// import { Navigate } from "react-router-dom";
import MainPage from "./main";
const Home=()=>{
  const [page,setPage]=useState(0);
  const [msg,setMsg]=useState({
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
  const [mp,setMp]=useState(false);

  const Title=['Registration','Personal Details','Education','Experience'];
  const [details,setDetails]=useState({
    name:"",
    email:"",
    phNum:"",
    DOB:"",
    pass:"",
    cpass:"",
    add1:"",
    add2:"",
    state:"",
    pin:"",
    highEdu:"",
    field:"",
    Perc:"",
    emp:"",
    desig:"",
    YOexp:""
  })

  const DispalyPage=()=>{
    if(page===0){
        
        
        return <Regist details={details} setDetails={setDetails} msg={msg} setMsg={setMsg}/>;
    }else if(page===1){

        return <PersonalDet details={details} setDetails={setDetails} msg={msg} setMsg={setMsg}/>
    }else if(page===2){
        return <Edu details={details} setDetails={setDetails} msg={msg} setMsg={setMsg}/>
    }else if(page===3){
        return <Experience details={details} setDetails={setDetails} msg={msg} setMsg={setMsg}/>;
    }
    
  }
  const Handle = () => {
    if (page === 0) {
      if (!details.name) {
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
        setMsg({...msg,mname:"Enter Your Name"});
      }else if (!details.email) {
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
        setMsg({...msg,memail:"Email Required"});
      }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(details.email)) {
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
        setMsg({...msg,memail:"Check your Email Id"});
      }else if((details.phNum).length!==10){
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
        setMsg({...msg,mphNum:"Enter 10 Digit Phone number"});
      }else if(!details.DOB){
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
        setMsg({...msg,mDOB:"Enter Your DOB"})
      }else if(!details.pass){
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
        setMsg({...msg,mpass:"Enter Your Password"})
      }else if(details.pass!==details.cpass){
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
        setMsg({...msg,mcpass:"Password Did not Match"})
      }else {
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
       
        setPage(page + 1); 
      }
    } else if (page === 1) {

      if (!details.add1) {
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
        setMsg({...msg,madd1:"Fill Addres 1"});
      }else if(!details.add2){
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
        setMsg({...msg,madd2:"Fill Address 2"});
      }else if(!details.state){
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
        setMsg({...msg,mstate:"Fill State Name"});

      }else if(!details.pin){
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
        setMsg({...msg,mpin:"Fill Pin Code"});

      } else {
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
        setPage(page + 1); 
      }
    } else if (page === 2) {
     
      if (!details.highEdu) {
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
        setMsg({...msg,mhighEdu:"Enter Higher Education"});
      }else if(!details.field){
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
        setMsg({...msg,mfield:"Enter Field of Study"})
      }else if(!details.Perc){
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
        setMsg({...msg,mPerc:"Enter Your Percentage in CGPA"})
      } else {
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
        setPage(page + 1); 
      }
    } else if (page === 3) {
     
      if (!details.emp) {
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
        setMsg({...msg,memp:"Fill Employer Name"});
      }else if(!details.desig){
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
        setMsg({...msg,mdesig:"Fill Your Designation"});
      }else if(!details.YOexp){
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
        setMsg({...msg,mYOexp:"Fill Year of Experience"});
      }  else {
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
       setMp(true)
      }
    }
  };
  if(mp){
    return <MainPage data={details}/>
  }
    return(
        <div className="main">
         <div className="progress">
            <div style={{width: page===0 ? "25%": page===1 ? "50%": page===2 ? "75%" :"100%"}}></div>
         </div>
         <div className="cont">
            <div className="Title"><h1>{Title[page]}</h1></div>
            <div className="body">{DispalyPage()}</div>
            <div className="button">
            <button disabled={page===0} onClick={()=>{setPage(page -1)}}>Prev</button>
            <button  onClick={Handle}>{page ===Title.length-1?"Submit":"Next"}</button>
            </div>  
            {/* <div>{msg}</div> */}
         </div>
        </div>
    )
}
export default Home;