import React, { useState, useContext } from 'react'
import './signIn.css'

import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

import { AuthContext } from '../../contexts/auth'

const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)

  function handleSignIn(e) {
    e.preventDefault();

    if(email !== '' && password !== '') {
      signIn(email, password);
    }
  }

  return (
    <div className='container-center'>
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Logo do sistema de chamados" />
        </div>

        <form onSubmit={handleSignIn}>
          <h1>Entrar</h1>
          <input 
            type="text" 
            placeholder='email@email.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="text" 
            placeholder='********'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Acessar</button>
        </form>

        <Link to='/register'>Criar uma conta</Link>

      </div>
    </div>
  )
}

export default SignIn