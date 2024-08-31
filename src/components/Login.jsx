import React, { useState } from 'react';
import './styles.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login attempt', { email, password });
  };

  return (
    <div className="container">
        <div className="form-container">
            <h1>sign in / sign up</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="username" placeholder="user Name"/>
                <input type="password" id="password" placeholder="password"/>
                <button type="submit">sign in</button>
            </form>
            <p>don’t have an account ? <a href="/register">sign up now</a></p>
        </div>
        <div className="image-container">
            <img src="doggopic.png" alt="Cute Dog"/>
        </div>
    </div>
  );
}

export default Login;

