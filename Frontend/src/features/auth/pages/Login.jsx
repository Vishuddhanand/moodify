import React from 'react'
import "../style/login.scss"
import { Link } from "react-router"
import FormGroup from '../components/FormGroup'

const Login = () => {
  return (
    <div className="login-page">

      <div className="login-card">
        <h2>Login</h2>

        <form>
          <FormGroup placeholder="Username" name="username"/>
          <FormGroup type="password" placeholder="Password" name="password"/>
          <button type="submit" className='button'>Login</button>
        </form>
        <p>Don't have an account ? <Link to="/register">Register</Link></p>
      </div>

    </div>
  )
}

export default Login
