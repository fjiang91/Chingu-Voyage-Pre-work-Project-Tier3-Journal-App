import React from 'react'
import {connect} from 'react-redux'
import {getAllNotesThunk} from '../store/notes'

class Notes extends React.Component {
  componentDidMount = async () => {
    this.props.getAllNotes()
  }
  render() {
    console.log('notes', this.props.notes)
    return <div>Journal Page</div>
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    notes: state.notes
  }
}

const mapDispatch = dispatch => {
  return {
    getAllNotes: () => dispatch(getAllNotesThunk())
  }
}

export default connect(mapState, mapDispatch)(Notes)
