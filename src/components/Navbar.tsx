"use client";

import Link from "next/link";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { usePathname } from "next/navigation";
import styles from "../styles/Navbar.module.css";

const AppNavbar = () => {
  const pathname = usePathname();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} href="/">
          Annys
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-4">
            <Nav.Link
              as={Link}
              href="/"
              className={`${styles.navLink} ${
                pathname === "/" ? styles.active : ""
              }`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/about"
              className={`${styles.navLink} ${
                pathname === "/about" ? styles.active : ""
              }`}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/services"
              className={`${styles.navLink} ${
                pathname === "/services" ? styles.active : ""
              }`}
            >
              Services
            </Nav.Link>
            <NavDropdown
              title="Options"
              id="basic-nav-dropdown"
              className={`${styles.navLink} ${
                pathname === "/contact" ||
                pathname === "/signin" ||
                pathname === "/login"
                  ? styles.active
                  : ""
              }`}
            >
              <NavDropdown.Item as={Link} href="/signin">
                Signin
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/contact">
                Contact
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Item className="ms-lg-auto">
            <div className="hero-buttons">
              <Button className="btn btn-outline">
                <i className="fas fa-play-circle"></i>
                <NavDropdown.Item href="/login">
                  Login
                </NavDropdown.Item>
              </Button>
            </div>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
