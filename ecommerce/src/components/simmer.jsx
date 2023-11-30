const Simmer=()=>{
    return(
        <div className="flex flex-wrap items-center justify-center gap-10 backc">
        {
            [...Array(20)].map((_,index)=>{
        return(
            <div key={index} className="flex flex-col h-100 w-40 flex-nowrap border">
                <div className="h-40 w-40 my-2 bg-slate-100 rounded-md"></div>
                <p className="text-center w-full h-4 bg-gradient-to-l from-slate-500 rounded-md"></p>
                <div className="flex flex-row justify-around gap-10 m-1 "><p className=" bg-gradient-to-l from-slate-500  w-20 h-4 rounded-md gap-1"></p><p className="w-20 h-4 bg-gradient-to-l from-slate-500 rounded-md"></p></div>
                <div className="flex flex-row justify-around my-2 gap-3"><p className=" bg-gradient-to-l from-slate-500 w-20 h-4 rounded-md"></p><div className=" rounded font-bold bg-slate-600 w-20 h-5" ></div></div>
            </div>
        )
            })
        }
                </div>
    )
}
export default Simmer;