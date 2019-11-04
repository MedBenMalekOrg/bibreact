import React from 'react';
import Search from './component/search'
import Result from './component/result'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/result" component={Result} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    </React.Fragment>


  );
}

export default App;
