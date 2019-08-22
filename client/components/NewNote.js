import React from 'react'
import {connect} from 'react-redux'
import {addNewNoteThunk} from '../store/notes'

class NewNote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
  }

  handleOnChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleAddNewNote = event => {
    event.preventDefault()
    let userId = this.props.userId
    let newNote = {
      ...this.state,
      userId
    }
    this.props.addNewNote(newNote)
    this.setState({
      title: '',
      content: ''
    })
  }

  render() {
    const {title, content} = this.state
    const {handleOnChange, handleAddNewNote} = this
    return (
      <form className="form form-horizontal" onSubmit={handleAddNewNote}>
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
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    addNewNote: newNote => dispatch(addNewNoteThunk(newNote))
  }
}

export default connect(mapState, mapDispatch)(NewNote)
