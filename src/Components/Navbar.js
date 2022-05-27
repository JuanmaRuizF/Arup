import React from "react";
import "../Styles/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-component">
      <div className="navbar-component-container">
        <div className="navbar-component-container__dhub-field">
          d.Hub field
        </div>
        <div className="navbar-component-container__menu-options">
          <div className="navbar-component-container__menu-options-item">
            Documents
          </div>
          <div className="navbar-component-container__menu-options-item">
            RFI
          </div>
          <div className="navbar-component-container__menu-options-item">
            Submittals
          </div>
          <div className="navbar-component-container__menu-options-item">
            Issues
          </div>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Arup_Red_RGB.png"
          alt="ArupIcon"
          className="navbar-component-container__arup-icon "
        ></img>
      </div>
      <hr></hr>
    </div>
  );
}
