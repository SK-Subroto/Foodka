import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Border, BorderBottom } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#157347",
        borderBottom: "solid 2px #157347"
    }

    return (
        <Navbar variant="light" expand="lg" className="fixed-top" style={{ "backgroundColor": "rgba(253, 245, 230, 0.74)"}}>
            <Container fluid>
                <NavLink className="navbar-brand text-success fw-bold" to="/home">Foodka</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fw-bold">
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/home">Home</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/meals">Meals</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/about">About</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/contact">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;