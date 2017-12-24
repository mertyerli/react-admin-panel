import React from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";

const BlankPage = () => {
  return (
    <DropdownButton title="Dropdown" id="dd1">
      <MenuItem href="#books">Books</MenuItem>
      <MenuItem href="#podcasts">Podcasts</MenuItem>
      <MenuItem href="#">Tech I Like</MenuItem>
      <MenuItem href="#">About me</MenuItem>
      <MenuItem href="#addBlog">Add a Blog</MenuItem>
    </DropdownButton>
  );
};

export default BlankPage;
