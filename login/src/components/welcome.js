import { Link} from "react-router-dom";

const Welcome=()=>{
    
    return(
        <div className="home">
           <h1> Welcome to main page</h1>
           
           <div><Link to={'/'}><button>Log Out</button></Link></div>
        </div>
    )
}
export default Welcome;