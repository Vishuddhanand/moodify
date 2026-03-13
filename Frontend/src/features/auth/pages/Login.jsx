import React, { useState } from 'react'
import "../style/login.scss"
import { Link } from "react-router"
import FormGroup from '../components/FormGroup'
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router"

const Login = () => {

  const { loading, handleLogin } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    await handleLogin({ email, password })
    navigate("/")

  }

  return (
    <div className="login-page">

      <div className="login-card">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <FormGroup
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            name="email"
          />
          <FormGroup
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            name="password"
          />
          <button type="submit" className='button'>Login</button>
        </form>
        <p>Don't have an account ? <Link to="/register">Register</Link></p>
      </div>

    </div>
  )
}

export default Login
