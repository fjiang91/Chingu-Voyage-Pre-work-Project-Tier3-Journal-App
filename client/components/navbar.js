import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  // <!-- Navigation -->
  // <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
  //   <div class="container">
  //     <a class="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
  //     <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
  //       Menu
  //       <i class="fas fa-bars"></i>
  //     </button>
  //     <div class="collapse navbar-collapse" id="navbarResponsive">
  //       <ul class="navbar-nav ml-auto">
  //         <li class="nav-item">
  //           <a class="nav-link js-scroll-trigger" href="#about">About</a>
  //         </li>
  //         <li class="nav-item">
  //           <a class="nav-link js-scroll-trigger" href="#projects">Projects</a>
  //         </li>
  //         <li class="nav-item">
  //           <a class="nav-link js-scroll-trigger" href="#signup">Contact</a>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
  <div>
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/">
        <h2>Journal App</h2>
      </Link>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <Link to="/notes">Notes</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
  </div>
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
