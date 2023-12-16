import { useRouteError } from "react-router";


const Error=()=>{
    const err= useRouteError();
    console.log(err);
    return <div>
        <h1>oops</h1>
    </div>
}

export default Error;