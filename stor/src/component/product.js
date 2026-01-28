import { useState } from "react"




export default function Product(){
   
    const[count,setCount]=useState(0)
    
    return(
        <div>
        <p> this count:{count}
        </p>
        <button onClick={()=>
            setCount(count+1)
        }>increase</button>
        <br></br>



          <button onClick={()=>
            setCount(count-1)
        }>decrease</button>
        <br></br>
        
       <button onClick={()=>
            setCount(count*2)
        }>double</button>
<br></br>

<button onClick={()=>
            setCount(0)
        }>reset</button>









        </div>
    )
}