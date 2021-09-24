import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function onToggle() {
    setOpen(!open);
  }

  return (
    <nav className="navbar">
      <div className="px-4 pt-2" id="nav-brand">
        <a>Shortly</a>
      </div>
      <div className={`nav-links ${open ? "" : "nav-close"}`}>
        <div onClick={onToggle} className="nav-toggle-btn">
          <div className={`line ${open ? "nav-toggled" : ""}`}></div>
          <div className={`line ${open ? "nav-toggled" : ""}`}></div>
          <div className={`line ${open ? "nav-toggled" : ""}`}></div>
        </div>
        <div className="d-flex">
          <div>
            <a href="#" className="nav-btn">
              Features
            </a>
          </div>
          <div>
            <a href="#" className="nav-btn">
              Pricing
            </a>
          </div>
          <div>
            <a href="#" className="nav-btn">
              Resources
            </a>
          </div>
        </div>

        {/* <div style={{ flex: 1, width: "100%" }}> </div> */}

        <div className="d-flex">
          <div>
            <a href="#" className="nav-btn">
              Login
            </a>
            {/* <a href="#" className="nav-btn active">
              Login
            </a> */}
          </div>
          <div>
            <a href="#" className="nav-btn">
              Sign Up
            </a>
          </div>
        </div>
      </div>
      <div onClick={onToggle} className="nav-toggle-btn pt-2">
        <div className={`line ${open ? "nav-toggled" : ""}`}></div>
        <div className={`line ${open ? "nav-toggled" : ""}`}></div>
        <div className={`line ${open ? "nav-toggled" : ""}`}></div>
      </div>
      {/* <div className="nav-toggle-open">
        <div> </div>
      </div> */}
    </nav>
  );
}
