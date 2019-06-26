import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu';
import routes from './routes';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu></Menu>
          <div className="container col-sm-12 ">
                {this.showContentMenus(routes)}
          </div>
        </div>
      </Router>
    );
  }

  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      })

    }
    return <Switch>{result}</Switch>;
  }
}

export default App;
