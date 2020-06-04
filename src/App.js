import React from 'react';
import './App.css';
import MovieCarousel from './Components/MovieCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import MovieCards from './Components/MovieCards';
import Details from './Components/Details'


// api key => 3cbec692df5e8871601749cff450ce6c
export class App extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <MovieCarousel/>
        <MovieCards/> 
        <Details/>
      </div>
    )
  }
}

export default App