

import Login from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
    
    return (
        
        <div>

        <h1>Hello World</h1>
            <Login/>
            <Dashboard/>

        </div>
        
    )
    
}

export default App;