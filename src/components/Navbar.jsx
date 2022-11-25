import React from "react";
import './Colors.css';
const NavBar = () => {
  return (
    <>
      <nav class="navbar bg-dark">
        <div class="container-fluid d-flex align-items-center">
          <a class="navbar-brand text-white" href="#">
          <img src="./memes/gato.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-center"/>
          MemeEditor
          </a>
        </div>
      </nav>
    </>
  );
}
export default NavBar;