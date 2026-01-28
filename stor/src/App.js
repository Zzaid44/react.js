import logo from './logo.svg';
import './App.css';
import Classpage from './component/classcomponent';
import Navbar from './component/nav';
import Footer from './component/footer';
import Home from './component/home';
import Product from './component/product';
import {BrowserRouter , Routes,Route } from "react-router-dom";

function App() {
  return (
   
        <BrowserRouter>
        <Navbar/>
        <Routes>
      <Route path='/' component={Home}/>
      <Route path='/prod' component={Product}/>

      
      

        </Routes>
        



        <Footer/>
        </BrowserRouter>
         




         
        
   
  );
}

export default App;
