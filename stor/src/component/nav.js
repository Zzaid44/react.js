
import { Link } from "react-router-dom"
export default function Navbar(){
  return(
    <div id="nav">
                <ul>
                    <li>
                        
                      <Link to="/">
                         home
                      </Link>
                       
                    </li>
                    <li>
                        <Link to="/prod">product</Link>
                       
                      
                    </li>
                    <li>
                        
                       <Link to="/about">
                        about
                       </Link>
                     
                    </li>
                    <li>
                        
                        <Link to="/cont">
                           contact
                        </Link>
                        
                    </li>
                </ul>
            </div>
  )



}