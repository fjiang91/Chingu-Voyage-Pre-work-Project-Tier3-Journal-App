import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_NOTES = 'GET_ALL_NOTES'
const ADD_NOTE = 'ADD_NOTE'

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

/**
 * REDUCER
 */
export default function(state = defaultNotes, action) {
  switch (action.type) {
    case GET_ALL_NOTES:
      return action.notes
    case ADD_NOTE:
      return [...state, action.newNote]
    default:
      return state
  }
}
