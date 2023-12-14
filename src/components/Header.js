import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link
        to="/HeroSection"
        style={{ color: "darkgrey", textDecoration: "none" }}
      >
        <h1></h1>
      </Link>
      <h1></h1>
    </div>
  );
}
