import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from './App'
import Details from './Components/Details'
import SearchResults from './Components/SearchResults'

const rootElement = document.getElementById("root");
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')

  <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path={"/Details/:id"}><Details /></Route>
        <Route path={"/Search/:name"}><SearchResults/></Route>
      </Switch>
      </BrowserRouter>,
      rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
