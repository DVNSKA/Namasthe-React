import { useEffect, useState } from "react";

const useIncrese=(y)=>{
  
    const [x,setx]=useState(0);
    useEffect(()=>{
        fetch();
    },[]);
    const fetch=()=>{
        setx(y+1);
    }
   
    return x;
}

export default useIncrese;