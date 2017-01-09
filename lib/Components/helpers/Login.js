import React from 'react';

const Login = ({ signIn }) => {
  return (
    <div>
      <button className = "loginButton" onClick={() => signIn() }>Log IN PLZ</button>
    </div>
  );
};

export default Login
