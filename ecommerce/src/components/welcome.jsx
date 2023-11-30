import React from "react";
import { Link } from "react-router-dom";
const Welcome=()=>{
    return(
        <div className="h-screen flex items-center justify-center backimage">
        <div className="flex items-center justify-center flex-col gap-4 font-sans">
            <p className="text-2xl glow">Welcome To <span className="font-bold glow ">'Online Store'</span></p>
            <p className="text-xl glow">“Your one Spot Destination”</p>
            <Link to='items'><button className="bg-gradient-to-r from-sky-500 to-indigo-500 w-20 rounded font-bold">Enter</button></Link>
            
        </div>
    </div>
    )
 
}
export default Welcome;