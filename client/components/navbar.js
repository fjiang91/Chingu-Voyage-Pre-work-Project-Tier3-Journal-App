import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <nav className="navbar navbar-dark bg-primary">
    <Link to="/" style={{textDecoration: 'none'}}>
      <h2>Journal App</h2>
    </Link>
    {isLoggedIn ? (
      <div>
        {/* The navbar will show these links after you log in */}
        <Link to="/home">
          <button type="button" className="btn btn-outline-danger">
            Home
          </button>
        </Link>
        <Link to="/notes">
          <button type="button" className="btn btn-outline-danger">
            Notes
          </button>
        </Link>
        <a href="#" onClick={handleClick}>
          <button type="button" className="btn btn-outline-danger">
            Logout
          </button>
        </a>
      </div>
    ) : (
      <div>
        {/* The navbar will show these links before you log in */}
        <Link to="/login">
          <button type="button" className="btn btn-outline-danger">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button type="button" className="btn btn-outline-danger">
            Sign Up
          </button>
        </Link>
      </div>
    )}
  </nav>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
