import {Card, CardDeck , CardGroup, Col, CardColumns, Row, Container} from 'react-bootstrap'
import React, { Component, useEffect , useState  } from 'react'
import axios from 'axios'

export default function MovieCards() {

  const [latest,setLatest]=useState([])
  const [popular,setPopular]=useState([])
  const [top_rated, setTop_Rated]=useState([])
  useEffect(() => {
    axios
    .all([
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=3cbec692df5e8871601749cff450ce6c&language=en-US'),
      axios.get('https://api.themoviedb.org/3/movie/latest?api_key=3cbec692df5e8871601749cff450ce6c&language=en-US'),
      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=3cbec692df5e8871601749cff450ce6c&language=en-US&page=1')
    ])
      .then(res => {
          setPopular(res[0].data.results)
          setLatest(res[1].data)
          setTop_Rated(res[2].data.results)
      })
      .catch(err => {
          console.log(err)
      });
  }, []);

  const names = popular.map( (data,id) => {
     
    return(
      <Card
      key={id}
      text="dark"
      className="text-center"
      style={{ margin : "10px" }}
      >
      <Card.Body>
        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500'+data.poster_path} style={{height:"200px"}}/>
    <Card.Title>{data.title}</Card.Title>
        </Card.Body>
      </Card>

    );
  });

  const topMovies = top_rated.map( (data,id) => {
     
    return(
      <Card
      key={id}
      text="dark"
      className="text-center"
      style={{ margin : "10px" }}
      >
      <Card.Body>
        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500'+data.poster_path} style={{height:"200px"}}/>
    <Card.Title>{data.title}</Card.Title>
      <small className="text-muted">Rate: {data.vote_average}</small>
        </Card.Body>
      </Card>

    );
  });
        return (
            <div className="container">   
           
                <hr/>
                <h3>Popular Movies</h3>
                <hr/>

                <Container>
                  <Row xs={2} md={4} lg={6}>
                    {names}
                  </Row>
                </Container>

                <hr/>
                <h3>Top Rated Movies</h3>
                <hr/>
                <Container>
                  <Row xs={2} md={4} lg={6}>
                    {topMovies}
                  </Row>
                </Container>
            </div>
        )

}

