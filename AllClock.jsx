import React, { useEffect, useState } from 'react'



export default function AllClock() {

    const initialDate = {
        fecha: new Date(),
         edad: 0,
         nombre: "Martín",
         apellidos: "San José"
    };

    const [date, setDate] = useState(initialDate)

    useEffect(() => {
      console.log("component creado")
    const timerID = setInterval(() => {
        console.log("Actualizacion del component")
    }, 1000);
      return () => {
        console.log("component va a desaparecer")
        clearInterval(timerID)
      }
    }, []);
    

  return (
    <div><h2>
    Hora Actual:
    {date.fecha.toLocaleTimeString()}
    </h2>
    <h3>{date.nombre} {setDate.apellidos}</h3>
    <h1>Edad: {date.edad}</h1>
    </div>
  )


}

this.setDate((date) => {
    let edad = date.edad +1;
    return {
       ...date,
       fecha: new Date(),
       edad
    }
 });




