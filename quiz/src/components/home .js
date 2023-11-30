import Ques from './quiz.json'
import {useState} from 'react'
const Quiz=()=>{
    // console.log(Ques.questions.length)
    const [page,setPage]=useState(0)
    const [correct,setCorrect]=useState(0)
    let ques=Ques.questions[page]
    // console.log(ques)

    const Check=(data)=>{
        setPage(page + 1)
        if(ques.correctIndex===data){
            setCorrect(correct + 1);
        }
    }
    const Reset=()=>{
        setCorrect(0);
        setPage(0);
    }
    return(
        <div className="container">
        <div className='title'>The Quiz App</div>
        <div className='main'>
        <>{page<Ques.questions.length? <><div className='que'><span>{page+1}.{ques.question}</span></div>
        <div className='opt'>
            <div style={{backgroundColor:'none'}} onClick={()=>{Check(0)}}>{ques.answers[0]}</div>
            <div style={{backgroundColor:'none'}} onClick={()=>{Check(1)}}>{ques.answers[1]}</div>
            <div style={{backgroundColor:'none'}} onClick={()=>{Check(2)}}>{ques.answers[2]}</div>
            <div style={{backgroundColor:'none'}} onClick={()=>{Check(3)}}>{ques.answers[3]}</div>
        </div>
        {/* <div><button  onClick={()=>{setPage(page + 1)}}>{page<Ques.questions.length-1?"Next":"Submit"}</button></div> */}
        </>:<div className='score'><p>You Have Scored:{`${correct}/${Ques.questions.length}`}</p>
        <button onClick={Reset}>Re-Try</button>
        </div>}</>
        </div>
        
        
       
        </div>
    )
}
export default Quiz;