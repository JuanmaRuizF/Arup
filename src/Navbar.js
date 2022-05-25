import React from "react";

export default function Navbar() {
  return (
    <div className="whiteBackground">
      <div className="nav-container">
        <div className="dhub-field">d.Hub field</div>
        <div className="menu-options">
          <div className="menu-options-item">Documents</div>
          <div className="menu-options-item">RFI</div>
          <div className="menu-options-item">Submittals</div>
          <div className="menu-options-item">Issues</div>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Arup_Red_RGB.png"
          alt="ArupIcon"
          className="arupICON"
        ></img>
      </div>
      <hr></hr>
    </div>
  );
}
