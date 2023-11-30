// import {useState} from 'react'
const MainPage=({data})=>{
// const [user,setUser]=useState([])
// setUser({...details});

console.log(data)
    return(
        <div className="main1">
         <h1>Hello <span id="name">{(data.name).toUpperCase()}</span>  Welcome to main Page</h1>
        </div>
    )
}
export default MainPage