import React from 'react';

const Login = ({ authorize, setUser, text }) => {
  return (
    <div>
    <button className = "loginButton" onClick={() =>  authorize().then((fromFirebase) => setUser(fromFirebase)) }>{text}</button>
    </div>
  );
};

export default Login
