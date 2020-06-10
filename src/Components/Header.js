import React, { Component , useEffect, useState } from 'react'
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'


export default function Header() {

    const [searchName, setSearchName]=useState("");
    const [search,setSearch]=useState("")
    return (
        <div>
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/">Movies</Navbar.Brand>
            <Nav>
                <Link to='/'><Nav.Link href='#home'>Home</Nav.Link></Link>
                <Nav.Link href='#TV'>TV Shows</Nav.Link>
                <Nav.Link href='#cinema'>Cinema</Nav.Link>
            </Nav>
            <Form inline >
                <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{width:'500px'}} onChange={e => setSearchName(e.target.value)}/>
                <Link to={{ pathname: "/Search/" + searchName }} ><Button variant="outline-info">Search</Button></Link>
            </Form>
        </Navbar>
    </div>
    )
}



// export class Header extends Component {



//     render() {
//         return (
            // <div>
            //     <Navbar bg="dark" variant="dark" fixed="top">
            //         <Navbar.Brand href="/">Movies</Navbar.Brand>
            //         <Nav>
            //             <Link to='/'><Nav.Link href='#home'>Home</Nav.Link></Link>
            //             <Nav.Link href='#TV'>TV Shows</Nav.Link>
            //             <Nav.Link href='#cinema'>Cinema</Nav.Link>
            //         </Nav>
            //         <Form inline >
            //             <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{width:'500px'}} onChange={this.props.onInputChange}/>
            //             <Button variant="outline-info">Search</Button>
            //         </Form>
            //     </Navbar>
            // </div>
//         )
//     }
// }

// export default Header
