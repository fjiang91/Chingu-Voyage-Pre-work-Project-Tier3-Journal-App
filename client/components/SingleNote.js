import React from 'react'
import {Link} from 'react-router-dom'

const SingleNote = props => {
  const {note, userId, handleDeleteNote} = props
  return (
    <div className="card text-white bg-primary mb-3 col-sm-12 col-md-6 col-xl-4 -darkCard">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.content}</p>
        <p className="card-text">
          <small className="text-muted">{note.updatedAt}</small>
        </p>
        <div className="d-flex">
          <div className="col-6  justify-content-center">
            <Link to={`/notes/${userId}/${note.id}`} className="card-link">
              <button type="button" className="btn btn-outline-success">
                Edit
              </button>
            </Link>
          </div>
          <div className="col-6 justify-content-center">
            <button
              type="button"
              className="btn btn-outline-danger "
              onClick={event => handleDeleteNote(event, userId, note.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleNote
