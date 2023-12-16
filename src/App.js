import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter , RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./Error";
import Restromenu from "./components/Restromenu";
//import Gro from "./Gro";

const App=()=>
{
 return (<div className="app">
  <Header />
  <Outlet />
 </div>)
}
const Gro=lazy(()=>import("./Gro"));
const approute=createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement: <Error />,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },{
                path:"/rest/:id",
                element:<Restromenu />
            },{
                path:"/Gro",
                element:<Suspense fallback={<h1>dx</h1>}>
                <Gro />
                </Suspense>
            },
        ]
    },
    

])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approute} />);