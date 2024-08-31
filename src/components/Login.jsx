import './styles.css'

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    let obj = Object.fromEntries(new FormData(e.target).entries());
    console.log('Login attempt', obj);
  };

  return (
    <div className="container">
        <div className="form-container">
            <h1>sign in / sign up</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="username" name="username" placeholder="username"/>
                <input type="password" id="password" name="password" placeholder="password"/>
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

