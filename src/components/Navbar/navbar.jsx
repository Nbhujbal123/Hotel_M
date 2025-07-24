import React from "react";
import "./navbar.css";
import {useState} from "react";
import {assets} from "../../assets/frontend_assets/assets";
import { Link,Navigate } from "react-router-dom";

export const Navbar = ()=>{

    const [menu,setmenu] = useState("home");

    return(
        <div className="navbar">
           <img src={assets.logo} className="logo" width="120px" height="60px" />

           <ul className="navbar-menu">
             <li onClick={()=>{setmenu("home")}} className={menu==="home"?"active":""}> <Link to="home">Home</Link> </li>
             {/* <li onClick={()=>{setmenu("menu")}} className={menu==="menu"?"active":""}> <Link to="menu"> Menu</Link></li>
             <li onClick={()=>{setmenu("mobile_app")}} className={menu==="mobile_app"?"active":""}>Mobile app</li>
             <li onClick={()=>{setmenu("contact_us")}} className={menu==="contact_us"?"active":""}>Constact us</li> */}
           </ul>

           <div className="navbar-right">
            {/* <img src={assets.search_icon}  className="search-icon"/> */}
            <Link to="cart">
            <div className="navbar-basketicon">
                    <img src={assets.basket_icon} />
                    <div className="dot"></div>
            </div>
            </Link>
            
              {/* <button>signIn</button> */}
           </div>
        </div>   

        
    )
}