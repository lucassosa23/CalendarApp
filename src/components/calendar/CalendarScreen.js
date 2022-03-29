import React, {  useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "moment/locale/es"
import { NavBar } from '../ui/NavBar'
import {messages} from "../helpers/calendar-messages-es"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'
import { useDispatch, useSelector } from 'react-redux'
import { uiOpenModal } from '../../actions/ui'
import  {eventClearNote, eventSetActive } from "../../actions/events";
import { AddNewFab } from "../ui/AddNewFab"
import { DeleteEventFab } from '../ui/DeleteEventFab'

moment.locale("es");

const localizer = momentLocalizer(moment);


export const CalendarScreen = () => {

  const { events, activeEvent  } = useSelector(state => state.calendar)


   const dispatch = useDispatch()
  
  const [lastView, setLastView] = useState(localStorage.getItem("lastView") || "month");

  
 
  const onSelectSlot = (e) => {
     dispatch(eventClearNote())
  }
   
const onDoubleClick = (e) =>{
  dispatch(uiOpenModal());
};

const onSelectEvent = (e) =>{
  dispatch(eventSetActive(e))

}

const onViewChange = (e) =>{
  setLastView(e);
localStorage.setItem("lastView", e);
}

  const eventStyleGetter = (event,start,end,isSelected) =>{
    const style = {
      backgroundColor: "#367CF7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block"
    }
    return {
      style
    }

  }
  return (
    <div className='calendar-container'>
     <div className='calendar-screen'>   
          <NavBar/>

          <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      messages={messages}
      onDoubleClickEvent= {onDoubleClick}
      onSelectEvent={onSelectEvent}
      onView= {onViewChange}
      onSelectSlot= {onSelectSlot}
      selectable = {true}
      view= {[lastView]}
      eventPropGetter= {eventStyleGetter}
      components= {{
        event: CalendarEvent
      }}

    />

    <AddNewFab />

      {
        (activeEvent) && <DeleteEventFab/>
     
    }
    
    <CalendarModal/>
    
      </div>
      </div>  
    
  )
}
