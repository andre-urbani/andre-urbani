import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bulma'
import '/Users/andreurbani/development/andre-urbani/src/style.scss'

import Home from './components/Home'

const App = () => (

  <BrowserRouter basename={window.location.pathname || ''}>
    <Switch>
      <Route exact path="/" component={Home} />
    
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
