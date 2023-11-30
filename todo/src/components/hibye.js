import {useState} from "react"
const Hibye=()=>{
    const [tog,setTog]=useState('');
    
    const Handle=()=>{
       if(tog == ''){
           setTog("hii")
       }else if(tog=="hii")
       {
        setTog("Bye")
       }else if(tog=="Bye"){
        setTog("")
       }
    }
    return(
        <div>
          <p>{tog}</p>
            <button onClick={Handle}>Click Me</button>
        </div>
    )
}
export default Hibye;