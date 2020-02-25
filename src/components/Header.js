import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default class Header extends Component {
  render() {
    return (
      <Navbar color="light" light expand="md" className="mb-4">
        <NavbarBrand href="/">Pros Cons App</NavbarBrand>
      </Navbar>
    );
  }
}
