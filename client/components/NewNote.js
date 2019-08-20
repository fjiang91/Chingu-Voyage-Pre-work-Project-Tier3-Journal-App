import React from 'react'
import {connect} from 'react-redux'

class NewNote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
  }

  handleOnChange = event => {
    console.log(event.target.name)
    this.setState = {
      [event.target.name]: event.target.value
    }
  }

  render() {
    const {title, content} = this.state
    const {handleOnChange} = this
    return (
      <form>
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <input
            type="textarea"
            className="form-control"
            id="content"
            name="content"
            value={content}
            onChange={handleOnChange}
            placeholder="Enter Content"
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
  return {}
}

export default connect(mapState, mapDispatch)(NewNote)
