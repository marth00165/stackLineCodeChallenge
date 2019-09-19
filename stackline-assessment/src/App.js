import React from 'react';
import ViewGraph from './components/viewGraph.js'
import {BrowserRouter, Switch, Route} from "react-router-dom";

class App extends React.Component {

// using router just to navigate around the app better
  render(){




    return(
      <div className = "router">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component = {ViewGraph} />
        </Switch>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
