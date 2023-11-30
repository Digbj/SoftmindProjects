import React from "react";
import logo from "../pic/logo.png"
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cartcontext";
const Navbar=()=>{
  const GlobalState=useContext(CartContext);
  const items=GlobalState.state
  // console.log(items.length,"i m from navbar")
    return(
        <div className=" bg-orange-300">
   <div className="flex justify-between mx-5 align-center p-1 ">
            <div className="flex items-center justify-center" ><Link to='/'><img className="h-8 w-8" src={logo} alt="logo"/></Link></div>
            <div className="flex items-center justify-center font-sans text-xl font-bold" >Shopify</div>
          <Link to='cart'><div className="flex items-center justify-center" ><span>{items.length===0?null:<span>{items.length}</span>}</span><BsCart3 className="h-8 w-8"/></div></Link>  
        </div>
        </div>
     
    )
}
export default  Navbar;