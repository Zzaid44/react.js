import { useState } from "react"




export default function Home(){
    const[showImage,setshowImge]=useState(false)
    const handleclick=()=>{
        setshowImge(!showImage)
    }
    return(
        <div>
        <button onClick={handleclick}>{showImage?'hide':'show'}
                    </button>

        {
            showImage && <img width='200px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4RGI6CPwUvuOhpuNCKhyZtYliR7CqZhr2dw&s"/>
        }

        </div>
    )
}