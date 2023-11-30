import { useContext,} from "react";
import { CartContext } from "../context/cartcontext";
import { Link } from "react-router-dom";

const Cart=()=>{
    const GlobalState=useContext(CartContext);
    const dispatch=GlobalState.dispatch;
    const cartItems=GlobalState.state; 
   
const total=cartItems.reduce((total,item)=>{
    return(total+item.price*item.quantity)
},0)

    return(
       <div className="asa min-h-screen">
       <div className="flex justify-center abc">{cartItems.length===0?<h1 className="text-center font-sans font-bold">Cart Is Empty <Link to='/items'><span className="text-sky-600">Click Here</span></Link>  to Continue Shopping </h1>:<h1 className="text-center font-sans font-bold">Cart Items</h1>}</div>

<div className="flex items-center justify-center">
            
            <div>{cartItems.map((item)=>{
                return(
                    <div key={item.id} className="flex flex-row justify-between gap-10  p-5 border">
                        <div  className="flex flex-col justify-center content-center">
                        <img className="h-40 w-40 my-2 hover:scale-105 justify-center" src={item?.image} alt="img"/>
                <p className="text-sm font-sans font-bold text-center">{(item?.title).slice(0,30)}</p>
                <div className="flex flex-row justify-around "><p className="text-xs">Rating:-{item?.rating?.rate}</p><p className="text-xs">Count:-{item?.rating?.count}</p></div>
                <div className="flex flex-row justify-around my-2"><p className="text-sm font-sans font-bold">₹ {item?.price}</p></div>
                    
               
                    
                    </div>
                    <div className="flex flex-col items-center justify-center float-right">

                        <div className="flex flex-row gap-4">
                        <button className=" h-5 w-8 bg-slate-400 font-extrabold rounded-md" onClick={()=>{item.quantity>1?dispatch({type:'DEC',payload:item}):dispatch({type:'REMOVE',payload:item})}}>-</button>
                        <p>{item.quantity}</p>
                        <button className="h-5 w-8  bg-slate-400 font-extrabold  rounded-md" onClick={()=>{dispatch({type:'INC',payload:item})}}>+</button>
                        </div>
                        <div>Price:- <span className="font-bold">{(item.quantity)*(item.price)}</span> </div>
                      
                    </div>
                
                    </div>
                

                )
            })}</div>
            
        </div>
      <div className="flex bg-blue-200 justify-center gap-1 ">{cartItems.length>0?<div className="flex gap-3">Total Amount:- <span className="font-bold"> {total}</span><Link to='/pay'><button className="bg-blue-500 rounded-lg p-1 font-bold">Make Payment</button></Link> </div>:null}</div>
       </div>
         
        
       
    )
}
export default Cart;