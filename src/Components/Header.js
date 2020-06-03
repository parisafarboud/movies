// header => name of the site 
// searchbar
import React, { Component } from 'react'
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Navbar.Brand href="#home">Movies</Navbar.Brand>
                    <Nav>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#TV'>TV Shows</Nav.Link>
                        <Nav.Link href='#cinema'>Cinema</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </div>
        )
    }
}

export default Header
