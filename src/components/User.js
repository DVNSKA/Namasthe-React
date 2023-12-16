import Increse from "./utils/useIncrese";

const User=()=>{
    let co=0;

    return (<div className="user-card">
        <h1>{co}</h1>
        <button onClick={
            ()=>{
                co=Increse(co);
            }
        }>inc</button>
    </div>)
}
export default User;