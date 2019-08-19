import React from 'react'
import SingleNote from './SingleNote'
import {connect} from 'react-redux'
import {getAllNotesThunk} from '../store/notes'

class Notes extends React.Component {
  componentDidMount = () => {
    this.props.getAllNotes(this.props.userId)
  }
  render() {
    const notes = this.props.notes
    return (
      <div>
        Journal Page
        {notes.length > 0 ? (
          <div className="card-columns">
            {notes.map(note => <SingleNote key={note.id} note={note} />)}
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
    getAllNotes: userId => dispatch(getAllNotesThunk(userId))
  }
}

export default connect(mapState, mapDispatch)(Notes)
