import { Link } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';
const Payment=()=>{
    return(
        <div className="flex flex-col items-center justify-center min-h-screen gap-1">
            <p className="text-center font-bold">Welcome to payment page</p>
            <Link to='/'><button className="  bg-gradient-to-r from-sky-500 to-indigo-500 w-20 rounded font-bold">Home</button></Link> 
        </div>
    )
}
export default Payment;