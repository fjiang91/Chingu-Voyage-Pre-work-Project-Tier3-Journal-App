import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_NOTES = 'GET_ALL_NOTES'

/**
 * INITIAL STATE
 */
const defaultNotes = []

/**
 * ACTION CREATORS
 */
const getAllNotes = notes => ({type: GET_ALL_NOTES, notes})

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

/**
 * REDUCER
 */
export default function(state = defaultNotes, action) {
  switch (action.type) {
    case GET_ALL_NOTES:
      return action.notes
    default:
      return state
  }
}
