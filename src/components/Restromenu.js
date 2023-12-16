import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const Restromenu=()=>{
    // const [resinfo,setresinfo] = useState(null);
    // const [x,setx]=useState(null);
    // useEffect(()=>{
    //     fetchMenu();

    // },[])
    // useEffect(
    //     ()=>{
    //         resinfo===null?2:setx(resinfo.filter((res) => res.info.id === useparams));
    //     },[setresinfo]
    // )
    const useparams=useParams();
    
    // const fetchMenu= async ()=>{

    //     const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2868497&lng=80.4494344&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //     const json=await data.json();
    //    console.log(json);
    //    setresinfo(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
         
    // }

   
     
    return (
    <div>
    
    <h1>hi{useparams.id}</h1><div>         
            </div>
    </div>)
}

export default Restromenu;