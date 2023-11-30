import {useState} from "react"
import logo from './pic/logo.png'
const Weather=()=>{
    const [city,setCity]=useState('')
    const [report,setReport]=useState([])
    

    
    async function fetchData(){
        try{
            const res=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6c90d8e93cc89ba106a88517925eb5d1`);
            const data=await res.json();
            console.log(data)
            setReport(data);
            // console.log(report.city.name)
        }catch(err){
            console.log("Error in fetching the api");
        }
    }
    
    const Handle=()=>{
    
       
        fetchData()
        // console.log(report)
        // console.log(report.list[0].main.temp)
    //     const data=report?.city?.sunrise;
    //    const dateobj= data*1000;
    //        const dat=dateobj.slice(-2)
    //        console.log(dat)
    //      const da=new Date(dateobj)
    //      console.log(da)
    }
  
  
    return(
        <div className="container">
           <div className="nav">
            <div><img className="img" src={logo} alt='logo'/></div>
            <div className='title'>The Weather</div>
            <div className='contact'>Contact Us</div>
           </div>
           <div className="cont1">
            <div>
            <input placeholder="Enter City Name" onBlur={(e)=>{setCity(e.target.value)}}/>
            <button onClick={Handle}>Search</button>
            </div>
           <div className="report">
        {report.length===0?null:<><h3>{report?.city?.name}</h3>
          <div>{Math.floor(+(report?.list[0]?.main?.temp) - +273.15)}</div>
          {/* {console.log(report.list[0].main.temp)} */}
             <div><div>SunRise:{}</div><div></div></div></>}
                
          
           </div>
           </div>
        </div>
    )
}
export default Weather;