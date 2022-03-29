import { types } from "../types/types"



export const eventAddNew = (event) => ({
        type: types.eventAddNew,
        payload: event,

})



export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event,

})


export const eventClearNote = () => ({
    type: types.eventClearNote
})


export const eventUpdate = (event) => ({
    type: types.eventUpdate,
    payload: event
});


export const eventDelete = () => ({type: types.eventDelete})