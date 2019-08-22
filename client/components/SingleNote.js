import React from 'react'
import {Link} from 'react-router-dom'

const SingleNote = props => {
  const {note, userId, handleDeleteNote} = props
  return (
    <div className="card text-white bg-dark mb-3 darkCard">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.content}</p>
        <p className="card-text">
          <small className="text-muted">{note.updatedAt}</small>
        </p>
        <div className="row justify-content-around">
          <div className="col-4">
            <Link to={`/notes/${userId}/${note.id}`} className="card-link">
              <button type="button" className="btn btn-outline-success">
                Edit Card
              </button>
            </Link>
          </div>
          <div className="col-4">
            <button
              type="button"
              className="btn btn-outline-danger "
              onClick={event => handleDeleteNote(event, userId, note.id)}
            >
              Delete Card
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleNote
