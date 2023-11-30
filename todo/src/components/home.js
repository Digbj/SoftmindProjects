import {useState} from "react"
const Todo=()=>{
    const [inp,setInp]=useState('');
    const [list,setList]=useState([])
    const [comp,setComp]=useState([])
    const [edit,setEdit]=useState(false)
   
    const [idx,setIdex]=useState('')
    
    const AddTodo=(e)=>{
        if(!inp){
            console.log("type todo")
        }else{
            setList([...list,inp])
            console.log(list)
            setInp('')
        }
        
    }
    const DeleteT=(index)=>{
        const del=list.filter((_,i)=>i!==index)
        setList(del)
        console.log(del)
    }
    const Edit=(index, data)=>{
        setEdit(true)
        setInp(data)
       const comp=[...list]
       comp[index]=data;
    //    setList([...comp,list]);
       
       setIdex(index);
    }
    const Save=()=>{
        console.log("saved")
        setInp("")
        setEdit(false)
        list[idx]=inp;
        console.log(idx,"idx")
       
    }
    const Complete=(index)=>{
    const compl=list[index];
    const del=list.filter((_,i)=>i!==index)
    setList(del)
    setComp([...comp,compl])

    }
    return(
        <div>
            <h5>Todo List</h5>
            <div>
                <input placeholder="New Todo" onChange={(e)=>{setInp(e.target.value)}} value={inp} />
                {edit?<button className="btn" onClick={Save}>Save</button>:<button className="btn" onClick={AddTodo}>Add Todo</button>}
            </div>
            <div className="det">
                <div >
                    <h6>Pending Task <span>{list.length}</span></h6>
                    <div className="div1" >
                    {
                        list.map((data,index)=>{
                            return(
                                <p id="task" key={index}>
                                <span>{data}</span>
                                <span><button id="bb1" onClick={()=>DeleteT(index)}>Delete</button>
                                <button id="bb2" onClick={()=>Edit(index,data)}>Edit</button>
                                <button id="bb3" on onClick={()=>Complete(index)}>Complete</button></span>
                                
                                </p>
                                
                            )
                        })
                    }
                    </div >
                  
                </div>
                <div className="v1"></div>
                <div>
                    <h6>Completed Task <span>{comp.length}</span> </h6>
                    <div className="div1">
                    {
                        comp.map((data,index)=>{
                            return(
                                <p className="clist" key={index}>{data}</p>
                            )
                        })
                    }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Todo;