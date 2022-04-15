import { Route, BrowserRouter } from "react-router-dom";

import { ScreenLogin as Login } from "./pages/ScreenLogin";
import { ScreenTasks as Tasks } from "./pages/ScreenTasks";
const Routes = () => {
   return(
       <BrowserRouter>
           <Route element = { <Login/> }  path="/" />
           <Route element = { <Tasks/> }  path="/tasks" />
       </BrowserRouter>
   )
}

export default Routes;