import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Auth = () => {
  const { signup, login } = useContext(AuthContext);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isSignup) {
      await signup({ name, email, password });
    } else {
      await login({ email, password });
    }
  };

  return (
    <div>
      <h2>{isSignup ? 'Signup' : 'Login'}</h2>
      <form onSubmit={onSubmit}>
        {isSignup && <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" />}
        <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" />
        <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" />
        <button type="submit">{isSignup ? 'Signup' : 'Login'}</button>
      </form>
      <button onClick={() => setIsSignup(!isSignup)}>
        {isSignup ? 'Switch to Login' : 'Switch to Signup'}
      </button>
    </div>
  );
};

export default Auth;
