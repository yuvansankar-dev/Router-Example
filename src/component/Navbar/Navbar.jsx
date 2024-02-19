import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>All</Link>
      <Link to='/fullstack'>Full stack Development</Link>
      <Link to='/datascience'>Data Science</Link>
      <Link to='/cybersecurity'>Cyber Security</Link>
      <Link to='/career'>Career</Link>
    </div>
  );
};

export default Navbar;
