import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_NOTES = 'GET_ALL_NOTES'
const ADD_NOTE = 'ADD_NOTE'
const DELETE_NOTE = 'DELETE_NOTE'

/**
 * INITIAL STATE
 */
const defaultNotes = []

/**
 * ACTION CREATORS
 */
const getAllNotes = notes => ({type: GET_ALL_NOTES, notes})

const addNote = newNote => ({
  type: ADD_NOTE,
  newNote
})

const deleteNote = noteId => ({
  type: DELETE_NOTE,
  noteId
})

/**
 * THUNK CREATORS
 */
export const getAllNotesThunk = userId => async dispatch => {
  try {
    let {data} = await axios.get(`/api/notes/user/${userId}`)
    dispatch(getAllNotes(data))
  } catch (err) {
    console.error(err)
  }
}

export const addNewNoteThunk = newNote => async dispatch => {
  try {
    const {userId, title, content} = newNote
    let {data} = await axios.post(`/api/notes/user/${userId}`, {
      title,
      content
    })
    dispatch(addNote(data))
  } catch (error) {
    console.log('TCL: addNewNoteThunk -> error', error)
  }
}

export const deleteNoteThunk = (userId, noteId) => async dispatch => {
  try {
    await axios.delete(`api/notes/user/${userId}/${noteId}`)
    dispatch(deleteNote(noteId))
  } catch (error) {
    console.log('TCL: error', error)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultNotes, action) {
  switch (action.type) {
    case GET_ALL_NOTES:
      return action.notes
    case ADD_NOTE:
      return [...state, action.newNote]
    case DELETE_NOTE:
      return state.filter(note => note.id !== action.noteId)
    default:
      return state
  }
}
