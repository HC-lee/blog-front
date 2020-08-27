import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { enquireScreen } from 'enquire-js';
import Header from './pages/Home/Nav2';
import Footer from './pages/Home/Footer1';
import Home from './pages/Home';
import Page from './pages/Introduce';

import {
  Nav20DataSource,
  Footer10DataSource,
} from './pages/Home/data.source.js';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }
  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Header dataSource={Nav20DataSource} isMobile={this.state.isMobile} />
          <Route exact path="/" component={Home} />
          <Route path="/abc" component={Page} />
          <Footer dataSource={Footer10DataSource} isMobile={this.state.isMobile} />
        </div>
      </Router>
    );
  }
}

export default App;