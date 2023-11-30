import React, { useContext, useEffect, useState } from "react";
import Simmer from "./simmer";
import { CartContext } from "../context/cartcontext";
const Items=()=>{
    const[items,setItems]=useState([]);
    
    async function fetchData(){
        try{
            const res=await fetch('https://fakestoreapi.com/products');
            const data=await res.json();
            // console.log(data,"hello")
            setItems(data);
          
        }catch(err){
            console.log("Error in fetching the api",err);
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
    
const Globalstate=useContext(CartContext);
const dispatch=Globalstate.dispatch
console.log(Globalstate)
    return(
        <>{items.length===0?<Simmer/>:
        
        <div className="flex flex-wrap items-center justify-center gap-10 backb">
        {
            items?.map((item)=>{
                item.quantity=1;
        return(
            <div key={item?.id} className="flex flex-col h-100 w-40 flex-nowrap border">
                <img className="h-40 w-40 my-2 hover:scale-105" src={item?.image} alt="img"/>
                <p className="text-sm font-sans font-bold text-center">{(item?.title).slice(0,30)}</p>
                <div className="flex flex-row justify-around "><p className="text-xs">Rating:-{item?.rating?.rate}</p><p className="text-xs">Count:-{item?.rating?.count}</p></div>
                <div className="flex flex-row justify-around my-2"><p className="text-sm font-sans">₹ {item?.price}</p><button onClick={()=>{dispatch({type:"ADD",payload:item})}} className="text-sm px-1 rounded font-bold bg-slate-300 hover:border-green-900">Add To Cart</button></div>
            </div>
        )
            })
        }
                </div>}</>
       
    )
}
export default Items;