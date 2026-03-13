import React from 'react'
import { Link } from "react-router"
import "../style/register.scss"
import FormGroup from '../components/FormGroup'

const Register = () => {
  return (
    <div className="register-page">

      <div className="register-card">

        <h2>Create Account</h2>

        <form >

          <FormGroup placeholder="Username" name="username" />
          <FormGroup type="email" placeholder="Email" name="email" />
          <FormGroup type="password" placeholder="Password" name="password" />

          <button type="submit" className='button'>Register</button>

        </form>
        <p>Already have an account ? <Link to="/login">Login</Link></p>

      </div>

    </div>
  )
}

export default Register
