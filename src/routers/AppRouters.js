import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";

export const AppRouters = () => {
    return (
      <Router>
        <div>
            <Routes>
            <Route path="/login" element= {<LoginScreen/>}/>
            <Route path="/" element= {<CalendarScreen/>}/>   
            </Routes>
        
         
        </div>
      </Router>
    );
  }
  
