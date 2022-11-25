import React from "react";
import './Colors.css';
const NavBar = () => {
  return (
    <>
      <nav class="navbar bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">
          <img src="./memes/gato.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-top"/>
          MemeEditor
          </a>
        </div>
      </nav>
    </>
  );
}
export default NavBar;