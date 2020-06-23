import React from 'react'
import Header from './Header'
import { Container } from 'react-bootstrap'
import Background from './logo512.png'

export default function About() {
    return (
        <div>
            <Header/>
            <br />
            <br />
            <br />
            <br />
            <Container id='about' style={{height:'700px'}}>
                <p style={{backgroundColor:'rgba(0,0,0,0.3)', fontFamily:"Georgia, 'Times New Roman', Times, serif",height:'700px'}}>
                    <h2 style={{color:'teal'}}>React JS project</h2>
                    <h3 style={{color:'white'}}>Master: Mr Ahmadpanah</h3>
                    <h4 style={{color:'white'}}>Developers: Parisa Farboud , Zahra Abed</h4>
                    Hey, Welcome to our website <br/>
                    I hope you enjoy our site <br/>
                    This is the biggest database for movie, <br/>
                    Here, you can see the Popular , Top Rated and Latest movies <br/>
                    and also you can search the name and see the results. <br/><br/>
                    <h5>Thank you for your visiting. </h5>
                </p>
            </Container>
        </div>
    )
}
