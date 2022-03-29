import React from 'react'
import {store} from "./store/store"
import { AppRouters } from './routers/AppRouters'
import { Provider} from "react-redux";
    
    export const CalendarApp = () => {
      return (
          <Provider store = {store}>
              <h1><AppRouters/></h1>
          </Provider>
                
          
      
      )
    }
    
    