import React from "react";
import NavBar from "./NavBar";
import { Button } from "react-bootstrap";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Button bsStyle="success">Success</Button>
      <NavBar />
    </nav>
  );
};

export default Navigation;
