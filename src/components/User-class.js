import React from "react";

class Userclass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count1:0,
            count2:3,
            user:{
                name:"zxxx",
                location:"s"
            },
        };
    }
    async  componentDidMount()
    {
      const data= await fetch("https://api.github.com/users/DVNSKA");
      const json=data.json();
      console.log(json);
      this.setState({
        user:json
    })
    }

    render()
    { const {count1}=this.state;
        return(
        
        <div className="user-card">
            <h1>{this.props.name}</h1>
            <button onClick={()=>{
                this.setState({
                    count1:count1+1,
                })
            }}>incree</button>
            <h3>{count1}</h3>
            <h1>{this.state.user.name}</h1>
            <h2>{this.state.user.name}</h2>
            <h3>{this.state.user.location}</h3>
        </div>);
    }
}

export default Userclass;