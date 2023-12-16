import React, { useEffect, useSyncExternalStore } from "react";
import ReactDOM from "react-dom";
import {useState} from "react";
import { Link } from "react-router-dom";
const Header =()=>
{
    let [btnname,setbtnname]=useState("login");
    return (
        <div className="header">
         <div className="logo-container">
            <img  className="logo" src="https://www.shutterstock.com/image-vector/vector-food-delivery-staff-ride-260nw-1690619407.jpg" />

         </div>
         <div className="nav-iteams">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/Gro">Grocery</Link></li>

                <button className="login" onClick={()=>{
                    btnname==="login"?setbtnname("logout"):setbtnname("login")}}>{btnname}</button>
            </ul>
         </div>
        </div>
    )
}
export default Header ;