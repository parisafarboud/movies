import { Card, Row, Container } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './components.css'
import { Link } from "react-router-dom";

export default function MovieCards() {

  const [popular, setPopular] = useState([])
  const [top_rated, setTop_Rated] = useState([])

  useEffect(() => {
    axios
      .all([
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=3cbec692df5e8871601749cff450ce6c&language=en-US'),
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=3cbec692df5e8871601749cff450ce6c&language=en-US&page=1')
      ])
      .then(res => {
        setPopular(res[0].data.results)
        setTop_Rated(res[1].data.results)
      })
      .catch(err => {
        console.log(err)
      });
  }, []);


  const names = popular.map((data, id) => {

    return (
      <Card
        key={id}
        text="dark"
        className="text-center"
        style={{ margin: "10px" }}
      >
        <Card.Body>
          <Link to={{ pathname: "/Details/" + data.id }} >
            <Card.Img
              variant="top"
              src={'https://image.tmdb.org/t/p/w500' + data.poster_path}
              style={{ height: "200px" }}
            />
          </Link>
          <Card.Title>{data.title}</Card.Title>
        </Card.Body>
      </Card>

    );
  });

  const topMovies = top_rated.map((data, id) => {

    return (
      <Card
        key={id}
        text="dark"
        className="text-center"
        style={{ margin: "10px" }}
      >
        <Card.Body>
          <Link to={{ pathname: "/Details/" + data.id }} >
            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' + data.poster_path} style={{ height: "200px" }} />
          </Link>
          <Card.Title>{data.title}</Card.Title>
          <small className="text-muted">Rate: {data.vote_average}</small>

        </Card.Body>
      </Card>

    );
  });


  return (
    <div className="container" style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>
      <hr />
      <a id='popular'>
        <h2>Popular Movies</h2>
      </a>
      <hr/>

      <Container>
        <Row xs={2} md={4} lg={6} >
          {names}
        </Row>
      </Container>

      <hr />
      <a id="topRated"></a>
        <h2>Top Rated Movies</h2>
      <hr />
      <Container>
        <Row xs={2} md={4} lg={6}>
          {topMovies}
        </Row>
      </Container>


    </div>
  )

}

