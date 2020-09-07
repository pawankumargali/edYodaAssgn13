import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <Switch>
        <Route  path='/' exact component={Layout} />
        <Route  path='/video/:videoId' exact component={Layout} />
      </Switch>
    </Router>
  );
}

export default App;
