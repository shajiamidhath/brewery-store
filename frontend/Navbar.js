import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <h1>Brewery Review</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        {user ? (
          <>
            <li>{user.name}</li>
            <li><button onClick={logout}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/auth">Login/Signup</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
