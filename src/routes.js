import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import Battle from "./components/Battle";
import Victory from "./components/Victory";
import Defeat from "./components/Defeat";

export default function Routes(){
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Battle }  path="/battle" />
           <Route component = { Victory }  path="/victory" />
           <Route component = { Defeat }  path="/defeat" />          
       </BrowserRouter>
   );
}

