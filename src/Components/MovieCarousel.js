import React, { Component, useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css'
import axios from 'axios'

export default function App() {

  const [latest, setLatest] = useState([])
  const [now, setNow] = useState([])
  useEffect(() => {
    axios.all([
      axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=3cbec692df5e8871601749cff450ce6c&language=en-US&page=1'),
      axios.get('https://api.themoviedb.org/3/movie/latest?api_key=3cbec692df5e8871601749cff450ce6c&language=en-US'),

    ])
      .then(res => {
        setNow(res[0].data.results)
        setLatest(res[1].data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      });
  }, []);

  const now_playing = now.map((data, id) => {
    return (
      <Carousel.Item key={id}>
        <img
          className="d-block w-100"
          src={'https://image.tmdb.org/t/p/w500' + data.backdrop_path}
          alt={data.title}
          style={{ width: '600px' }}
        />
        <Carousel.Caption>
          <h3>{data.title}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return (
    <div className="container">
      <br />
      <br />
      <br />

      <Carousel>{now_playing}</Carousel>
    </div>
  )
}
