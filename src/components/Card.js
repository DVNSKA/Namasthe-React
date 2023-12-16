const Card=(prop)=>{
    const name=prop.resData.name;
    const rate=prop.resData.avgRating;
    //const x=prop.resData.sla.deliveryTime;
    return(
        <div  className="res-card">
           <img className="res-logo">

           </img>
           <h3>{name}</h3>
           <h6>30 mins</h6>
           <h6>{rate} stars</h6>
          
        </div>
    )
}

export default Card;