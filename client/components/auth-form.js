import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div className="auth-form">
      <form onSubmit={handleSubmit} name={name}>
        <h2 className="text-center">{displayName}</h2>
        <div className="form-group">
          <input
            name="email"
            type="text"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">
            {displayName}
          </button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
        <div className="d-flex row">
          {name === 'login' && (
            <Link to="/auth/google" className="col-6">
              Create Account
            </Link>
          )}
          <Link
            to="/auth/google"
            className={name === 'login' ? 'col-6' : 'col-12'}
          >
            {displayName} with Google
          </Link>
        </div>
      </form>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
