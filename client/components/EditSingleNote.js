import React from 'react'
import {connect} from 'react-redux'
import {getSingleNoteThunk, updateSingleNoteThunk} from '../store/notes'

class EditSingleNote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noteId: 0,
      title: '',
      content: ''
    }
  }

  componentDidMount = () => {
    //Retrieves params from redirect from Link
    const {userId, noteId} = this.props.match.params
    this.props.getSingleNote(userId, noteId)
  }

  componentDidUpdate = prevProps => {
    const {note} = this.props
    const {noteId} = this.state
    //Check if the note is empty and if we successfully fetch the single note via componentDidMount
    if (note.length && noteId === 0 && noteId !== note[0].id) {
      this.setState({
        title: note[0].title,
        noteId: note[0].id,
        content: note[0].content
      })
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnUpdate = event => {
    event.preventDefault()
    const {userId, noteId} = this.props.match.params
    this.props.updateSingleNote(userId, noteId, {...this.state})
  }

  render() {
    const {title, content} = this.state
    const {handleOnChange, handleOnUpdate} = this
    return (
      <form onSubmit={handleOnUpdate}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="title"
            name="title"
            onChange={handleOnChange}
            value={title}
            placeholder="Enter Title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            value={content}
            onChange={handleOnChange}
            placeholder="Enter Content"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    )
  }
}

const mapState = state => {
  return {
    note: state.notes
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleNote: (userId, noteId) =>
      dispatch(getSingleNoteThunk(userId, noteId)),
    updateSingleNote: (userId, noteId, newNote) =>
      dispatch(updateSingleNoteThunk(userId, noteId, newNote))
  }
}

export default connect(mapState, mapDispatch)(EditSingleNote)
