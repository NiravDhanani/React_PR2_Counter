import React from "react"
import { useState } from "react";
import  './counter.css'

export const Counter = () =>{
    const [cnt, setCnt] = useState(0)



 return (
   <section className="couterApp couterApp d-flex justify-content-center align-items-center">
     <div className="container ">
        <div>
        <h1 className="text-center">Counter App</h1>
           <div className="justify-content-center d-flex m-5">
           {<button onClick={()=> cnt>0 ? setCnt(cnt-1) : setCnt(0)}> - </button>}
           <h2 className="box ">{cnt}</h2>
           <button onClick={()=> setCnt(cnt+1)}> + </button>
           </div>
        </div>
    </div>
   </section>
 )
}

