import React, { useEffect, useState } from "react";
import "./Nav.css";
export default function Nav() {
  const [show, handleShow] = useState(Boolean);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix"
      />
      <button className="nav_reg">SignIn</button>
    </div>
  );
}
