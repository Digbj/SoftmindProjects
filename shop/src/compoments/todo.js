// import react from "react";
import { useState } from "react";
const Todo=()=>{
    const [data,setData]=useState('')
    const [list,setList]=useState([{}])
    const Handler=()=>{
setList({...list,data})
    }
    const DelHandle=()=>{
        console.log("deleted")
    }
    return(
        <div>
            <input placeholder="name" onBlur={(e)=>{setData(e.target.value)}} />
            <button onClick={Handler}>Add</button>
            {
                list.map((dat,index)=>{
                    return(
                        <li key={index}>
                        {dat}
                        <button  onClick={DelHandle}>Delete</button>
                    </li>
                    )
                    
                })
            }
        </div>
    )
}
export default Todo;