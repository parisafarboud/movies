import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Header'
import { Card, Row, Container, Col } from 'react-bootstrap'
import './details.css'

function Details() {

    const path = window.location.pathname
    let id = path.substring(path.lastIndexOf('/') + 1)

    const [detail, setDetail] = useState('')

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3cbec692df5e8871601749cff450ce6c&language=en-US`)
            .then(res => {
                setDetail(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }, [])

    return (
        <div>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <Container >
                <Row>
                    <Col lg={4} >
                        <img src={'https://image.tmdb.org/t/p/w500' + detail.poster_path} />
                    </Col>
                    <Col lg={8}>
                        <h2>{detail.title}</h2>
                        <h6>{detail.tagline}</h6>
                        <p>
                            <strong>Release Date</strong><br />
                            {detail.release_date}<br />
                            <strong>Language</strong><br />
                            {detail.original_language}<br />
                            <strong>Rate</strong><br />
                            {detail.vote_average}<br />
                            <strong>Overview</strong><br />
                            {detail.overview} <br /> <br />

                            <p style={{ color: 'red' }}> More on: <a href={detail.homepage} target='blank'>Original Website</a></p>
                        </p>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Details

