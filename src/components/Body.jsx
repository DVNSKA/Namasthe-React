import Card from "./Card";
import reslist from "./utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

//let list=[{name:"a",rate:3.4},{name:"b",rate:4},{name:"ad",rate:4.5}]
const Body =() =>
{
    const [list,setList]=useState([]);
    const [fillist,setfillist]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    const [searchtext,setsearchtext]=useState("");
    const fetchData=async ()=>
    {
       const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2868497&lng=80.4494344&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json=await data.json();
      console.log(json);
       setList(json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants);
       setfillist(json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants);
    }

    if(list.length===0)
    {
        return (
            <Shimmer />
        );
    }
    return (
        <div className="body">
            <div className="filter">
            <div className="search">
            <input type="text" className="search-box" value={searchtext}
            onChange={(e)=>{
                setsearchtext(e.target.value);
            }}
            ></input>
            <button onClick={()=>{
                    const filist=list.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                   setfillist(filist);
            }}>search</button>
            </div>
                <button className="filter-btn" onClick={()=>{
                  let  xlist=list.filter(
                        (res)=>res.info.avgRating>=4
                       
                    );
                    setList(xlist);
                    // list=list.filter(
                    //     (res)=>res.rate>=4
                       
                    // );
                    
                }}>TOP RATED</button>
            </div>
            <div className="res-container">
              { fillist.map((res,index)=>(
               <Link key={res.info.id}  to={"/rest/"+res.info.id}><Card resData={res.info} /></Link>))}
            </div>
        </div>
    )
}

export default Body;