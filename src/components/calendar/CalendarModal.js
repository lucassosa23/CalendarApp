import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import moment from "moment";
import DateTimePicker from 'react-datetime-picker';
import Swal from "sweetalert2"
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import { eventAddNew, eventClearNote, eventUpdate } from '../../actions/events';



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  Modal.setAppElement('#root');

  const now = moment().minutes(0).seconds(0).add(1, "hours");
  const nowTwo=now.clone().add(1, "hours");


  const initEvento = 
  {
      title: "",
      notes: "",
      start: now.toDate(),
      end: nowTwo.toDate()

  }

export const CalendarModal = () => {

    
    

const dispatch = useDispatch()
const {modalOpen}= useSelector(state => state.ui)
const {activeEvent}= useSelector(state => state.calendar)
const [titleValid, setTitleValid] = useState(true)

const [formValues, setFormValues] = useState(initEvento)
const { notes, title , start , end } = formValues;

const [dateStart, setDateStart] = useState(now.toDate())
const [dateEnd, setDateEnd] = useState(nowTwo.toDate())



useEffect(() => {
    if (activeEvent) {
        setFormValues(activeEvent);
    } else {
        setFormValues( initEvento);
    }
}, [activeEvent, setFormValues])


   



const handleSubmitForm = (e) => {
        e.preventDefault();

        if (momentStart.isSameOrAfter(momentEnd)){
            Swal.fire("error", "la fecha fin debe ser mayor que la de inicio")
            return;
        }

        if (title.trim().length < 2) {
            
            return setTitleValid(false);
        }

        if (activeEvent){
            dispatch(eventUpdate(formValues))
        } else {
        dispatch(eventAddNew({
            ...formValues,
            id: new Date().getTime(),
            user: {
            _id: "1234",
            name: "Lucas"    
            }
        }));
    }
        setTitleValid(true)
        closeModal();
    }

   

    const handleInputChange  = ({target}) => {


            setFormValues({
                ...formValues,
                [target.name]: target.value
            });
    }

    const momentStart = moment( start );
    const momentEnd = moment ( end );

    const handleEndDateChange = (e ) => {
        setDateEnd(e);
        setFormValues({
            ...formValues,
            end:e
        })
    }

    const handleStartDateChange = (e) =>{
       setDateStart(e);
       setFormValues({
        ...formValues,
        start:e
    })
    }


    const closeModal = () => {
        dispatch(uiCloseModal());
        dispatch(eventClearNote());
        setFormValues(initEvento);
    }
  return (
    <Modal
        isOpen={modalOpen}
        //onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={100}
        className="modal"
        overlayClassName="modal-fondo">


        <h1> {(activeEvent)? "Editar evento" : "Nuevo evento"}</h1>
    <hr />
    <form className="container"
    onSubmit={handleSubmitForm}
    >

    <div className="form-group">
        <label>Fecha y hora inicio</label>
        <DateTimePicker onChange={handleStartDateChange} value={dateStart}
        className="form-control" />
    </div>

    <div className="form-group">
        <label>Fecha y hora fin</label>
        <input className="form-control" placeholder="Fecha fin"/>
        <DateTimePicker
        onChange={handleEndDateChange} 
        value={dateEnd}
        minDate={dateStart}
        />
    </div>

    <hr />
    <div className="form-group">
        <label>Titulo y notas</label>
        <input 
            type="text" 
            className={`form-control ${!titleValid  && "is-invalid"}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleInputChange}
        />
        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
    </div>

    <div className="form-group">
        <textarea 
            type="text" 
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value= {notes}
            onChange={handleInputChange}
        ></textarea>
        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
    </div>

    <button
        type="submit"
        className="btn btn-outline-primary btn-block"
    >
        <i className="far fa-save"></i>
        <span> Guardar</span>
    </button>

</form>
        </Modal>
  )
}
