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

// import React from 'react'

// export default function App() {

//   const [latest,setLatest]=useState("")
//   useEffect(() => {
//       axios.get('https://api.themoviedb.org/3/movie/latest?api_key=3cbec692df5e8871601749cff450ce6c&language=en-US')
//       .then(res => {
//           setLatest(res.data)
//           console.log(res.data)
//       })
//       .catch(err => {
//           console.log(err)
//       });
//   }, []);
//   return (
//     <div>
//       <h3>{latest.title}</h3>
//     </div>
//   )
// }


