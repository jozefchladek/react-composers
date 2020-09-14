import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

export class Navigation extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/composer/create">Create composer</NavLink>
                </Nav>
            </Navbar>
        )
    }
}