import React from "react";

const Login = () => {
  return (
    <div>
      <form action='/form' method='post'>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' id='email' />
        </div>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='text' name='password' id='password' />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
