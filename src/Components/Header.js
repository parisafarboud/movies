import React, { Component , useEffect, useState } from 'react'
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'


export default function Header() {

    const [searchName, setSearchName]=useState("");
    return (
        <div>
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/">Movies</Navbar.Brand>
            <Nav>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='#popular'>Popular</Nav.Link>
                <Nav.Link href='#topRated'>Top Rated</Nav.Link>
                <Nav.Link href='/About'>About</Nav.Link>
            </Nav>
            <Form inline >
                <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{width:'500px'}} onChange={e => setSearchName(e.target.value)}/>
                <Link to={{ pathname: "/Search/" + searchName }} ><Button variant="outline-info">Search</Button></Link>
            </Form>
        </Navbar>
    </div>
    )
}

