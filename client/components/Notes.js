import React from 'react'
import {SingleNote, NewNote} from './'
import {connect} from 'react-redux'
import {getAllNotesThunk, deleteNoteThunk} from '../store/notes'

class Notes extends React.Component {
  componentDidMount = () => {
    this.props.getAllNotes(this.props.userId)
  }

  handleDeleteNote = (event, userId, noteId) => {
    this.props.deleteNote(userId, noteId)
  }

  render() {
    const {notes, userId} = this.props
    const {handleDeleteNote} = this
    return (
      <div className="container">
        <div>
          <h4 className="display-4">Digital Journal | </h4>
          <h6>Create A Note</h6>
        </div>
        <NewNote />
        {notes.length > 0 ? (
          <div className="card-columns">
            {notes.map(note => (
              <SingleNote
                key={note.id}
                note={note}
                userId={userId}
                handleDeleteNote={handleDeleteNote}
              />
            ))}
          </div>
        ) : (
          <div>Notes Loading</div>
        )}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    notes: state.notes,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    getAllNotes: userId => dispatch(getAllNotesThunk(userId)),
    deleteNote: (userId, noteId) => dispatch(deleteNoteThunk(userId, noteId))
  }
}

export default connect(mapState, mapDispatch)(Notes)
