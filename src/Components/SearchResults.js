import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Header'
import { Row, Container, Col, Card } from 'react-bootstrap'
import './details.css'
import { Link } from "react-router-dom";

function Details() {

    const path = window.location.pathname
    let name = path.substring(path.lastIndexOf('/') + 1)

    const [detail, setDetail] = useState('')
    const [related, SetRelated] = useState('')
    const [related2, SetRelated2] = useState('')
    const [related3, SetRelated3] = useState('')

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3cbec692df5e8871601749cff450ce6c&language=en-US&query=${name}&page=1`)
            .then(res => {
                setDetail(res.data.results[0])
                SetRelated(res.data.results[1])
                SetRelated2(res.data.results[2])
                SetRelated3(res.data.results[3])
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
                    <Col lg={6}>
                        <h2 style={{ fontFamily: 'fantasy' }}>{detail.title}</h2>
                        <h6 style={{ fontFamily: 'fantasy', color: 'teal' }}>{detail.tagline}</h6>
                        <p style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>
                            {detail.overview} <br /><br />
                            <Row>
                                <Col>
                                    <strong>Release Date</strong><br />
                                    {detail.release_date}<br />
                                    <strong>Language</strong><br />
                                    {detail.original_language}<br />
                                </Col>
                                <Col>
                                    <strong>Rate</strong><br />
                                    {detail.vote_average}/10<br />
                                    <strong>Running time</strong> <br />
                                    {detail.runtime} minutes
                                </Col>

                            </Row>
                            <br />
                            <p style={{ color: 'red' }}> More on: <a href={detail.homepage} target='blank'>Original Website</a></p>
                            Images: <br />
                            <img src={'https://image.tmdb.org/t/p/w500' + detail.backdrop_path} style={{ height: "170px" }} />

                        </p>
                    </Col>
                    <Col>
                        Related Movies
                    <hr />

                        <Card
                            text="dark"
                            className="text-center"
                            style={{ margin: "10px" }}>
                            <Card.Body>
                                <Link to={{ pathname: "/Details/" + related.id }} >
                                    <Card.Img
                                        variant="top"
                                        src={'https://image.tmdb.org/t/p/w500' + related.poster_path}
                                        style={{ height: "100px" }}
                                    />
                                </Link>
                                <Card.Title>{related.title}</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card
                            text="dark"
                            className="text-center"
                            style={{ margin: "10px" }}>
                            <Card.Body>
                                <Link to={{ pathname: "/Details/" + related2.id }} >
                                    <Card.Img
                                        variant="top"
                                        src={'https://image.tmdb.org/t/p/w500' + related2.poster_path}
                                        style={{ height: "100px" }}
                                    />
                                </Link>
                                <Card.Title>{related2.title}</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card
                            text="dark"
                            className="text-center"
                            style={{ margin: "10px" }}>
                            <Card.Body>
                                <Link to={{ pathname: "/Details/" + related3.id }} >
                                    <Card.Img
                                        variant="top"
                                        src={'https://image.tmdb.org/t/p/w500' + related3.poster_path}
                                        style={{ height: "100px" }}
                                    />
                                </Link>
                                <Card.Title>{related3.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Details

