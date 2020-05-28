import React, { Component } from 'react';
import './App.css';
import MovieCarousel from './Components/MovieCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import MovieCards from './Components/MovieCards';

export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <br/>
        <br/>
        <br/>
        <MovieCarousel/>
        <MovieCards/>
      </div>
    )
  }
}

export default App
