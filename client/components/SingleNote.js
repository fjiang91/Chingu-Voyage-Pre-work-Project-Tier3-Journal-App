import React from 'react'

const SingleNote = props => {
  const note = props.note
  return (
    <div className="card text-white bg-dark mb-3 darkCard">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.content}</p>
        <p className="card-text">
          <small className="text-muted">{note.updatedAt}</small>
        </p>
        <a href="#" className="card-link">
          Edit Card
        </a>
        <a href="#" className="card-link">
          Delete Card
        </a>
      </div>
    </div>
  )
}

export default SingleNote
