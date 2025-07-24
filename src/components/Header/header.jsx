import axios from "axios";
import "./header.css";
import {useState,useEffect, use} from "react";
import { Link,Navigate } from "react-router-dom";
import { useRef } from "react";


export const Header=()=>{

    const [productdata,setproductdata] = ([]);
    const scroll = useRef(null)

    // useEffect(()=>{
    //         axios.get("http://127.0.0.1:5050/products/24")
    //         .then(res=>{
    //             console.log(res.data)
    //         });
    // },[])

    // function exploremenuclick(e){
    //     e.target.setAttribute(className="active");
    // }

    function viewMenuclick(){
        window.scrollTo({ top: 750, behavior:"smooth" });
    }



    return(
        <div className="header" >
            <div className="header-content">
                <h2>Order your favourite food here</h2>
                <p>Let's get your in the time no wait no get</p>
                <button onClick={viewMenuclick}> View Menu </button>
            </div>
        </div>

    )
}