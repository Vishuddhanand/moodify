import React from 'react'
import { Link } from "react-router"
import "../style/register.scss"
import FormGroup from '../components/FormGroup'
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router"
import { useState } from 'react'

const Register = () => {
  const { loading, handleRegister } = useAuth()
  const navigate = useNavigate()

  const [username, setUsername] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    await handleRegister({ username, email, password })
    navigate("/login")
  }

  return (
    <div className="register-page">

      <div className="register-card">

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>

          <FormGroup value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" name="username" />
          <FormGroup value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" name="email" />
          <FormGroup value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" name="password" />

          <button type="submit" className='button'>Register</button>

        </form>
        <p>Already have an account ? <Link to="/login">Login</Link></p>

      </div>

    </div>
  )
}

export default Register
