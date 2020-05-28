import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css'

export class MovieCarousel extends Component {
  render() {
    return (
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn7.antedote.com/wp-content/uploads/2014/12/interstellar-poster.jpg"
              alt="First slide"
            />
             <Carousel.Caption>
               <h3>First Movie</h3>
               <p>The best movie of 2019</p>
             </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://blisssaigon.com/wp-content/uploads/2018/08/Feature-Inception.jpeg"
              alt="Second slide"
             />
             <Carousel.Caption>
               <h3>Second Movie</h3>
               <p>The best movie of 2018</p>
             </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default MovieCarousel
