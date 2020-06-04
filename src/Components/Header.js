import React, { Component } from 'react'
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Navbar.Brand href="#home">Movies</Navbar.Brand>
                    <Nav>
                        <Link to='/'><Nav.Link href='#home'>Home</Nav.Link></Link>
                        <Nav.Link href='#TV'>TV Shows</Nav.Link>
                        <Nav.Link href='#cinema'>Cinema</Nav.Link>
                    </Nav>
                    <Form inline >
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{width:'400px'}}/>
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </div>
        )
    }
}

export default Header
